const GITHUB_TOKEN: string | undefined = import.meta.env.VITE_GITHUB_TOKEN;

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
}

export const fetchCommitHistory = async (repo: string): Promise<Commit[]> => {
  try {
    const [owner, repoName]: string[] = repo.split('/').slice(-2);
    const url: string = `https://api.github.com/repos/${owner}/${repoName}/commits`;
    const response: Response = await fetch(url, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      switch (response.status) {
        case 404:
          throw new Error('Repository not found');
        case 401:
          throw new Error('Unauthorized access - check your token');
        default:
          throw new Error(`Error: ${response.statusText}`);
      }
    }

    const data: Commit[] = await response.json();
    return Array.isArray(data) ? data.slice(0, 5) : [];
  } catch (error) {
    console.error('Error fetching commit history:', (error as Error).message);
    return [];
  }
};
