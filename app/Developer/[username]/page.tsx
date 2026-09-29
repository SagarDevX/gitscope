

const page = async ({ params }:
    { params: Promise<{ username: string }> }) => {

    const { username } = await params
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()

    const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=10&sort=updated`
    );
    const repos = await reposResponse.json();
    console.log(repos)

    return (
        <div>

            <h1>{data.name}</h1>
            <p>@{data.login}</p>
            <p>{data.bio}</p>

            {repos.map((repo: any) => (
                <div key={repo.id}>
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                    <p>⭐ {repo.stargazers_count}</p>
                    <p>🍴 {repo.forks_count}</p>
                </div>
            ))}
        </div>
    )
}

export default page