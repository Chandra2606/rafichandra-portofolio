'use client'

import React, { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'Chandra2606';

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
}

const GitHubActivitySection = () => {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [stats, setStats] = useState({
        repos: 0,
        contributions: 0,
        pullRequests: 0,
        issues: 0
    });

    // Fungsi untuk mengambil data repository
    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                // Mengambil repository
                const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=3`);
                if (reposResponse.ok) {
                    const reposData = await reposResponse.json();
                    setRepos(reposData);

                    // Update stats
                    const allReposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
                    if (allReposResponse.ok) {
                        const userData = await allReposResponse.json();
                        setStats(prev => ({
                            ...prev,
                            repos: userData.public_repos || 0
                        }));
                    }
                }
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    // Fungsi untuk memformat tanggal
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Hari ini';
        if (diffDays === 1) return 'Kemarin';
        if (diffDays < 7) return `${diffDays} hari yang lalu`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu yang lalu`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)} bulan yang lalu`;
        return `${Math.floor(diffDays / 365)} tahun yang lalu`;
    };

    // Warna untuk bahasa pemrograman
    const languageColors: Record<string, string> = {
        JavaScript: '#f1e05a',
        TypeScript: '#3178c6',
        HTML: '#e34c26',
        CSS: '#563d7c',
        Python: '#3572A5',
        Java: '#b07219',
        PHP: '#4F5D95',
        Ruby: '#701516',
        'C#': '#178600',
        Go: '#00ADD8',
        Swift: '#ffac45',
        Kotlin: '#F18E33',
        Dart: '#00B4AB',
        Rust: '#dea584',
        null: '#6e7681', // For repositories without language
    };

    return (
        <section id="github-activity" className="w-full py-16 ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]">
                    GitHub Activity
                </h2>
                <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
                    Lihat aktivitas terbaru saya di GitHub dan kontribusi pada proyek open source
                </p>

                {/* GitHub Contributions & Stats */}
                <div className="bg-[#161b22] p-6 rounded-xl border border-gray-700 shadow-xl mb-8 max-w-5xl mx-auto">
                    <h3 className="text-xl font-bold mb-4">Aktivitas GitHub</h3>
                    <div className="overflow-hidden">
                        <div className="flex flex-col items-center">
                            {/* GitHub Contribution Graph */}
                            <img
                                src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&bg_color=0d1117&color=58a6ff&line=58a6ff&point=FFFFFF&area=true&hide_border=true`}
                                alt="GitHub Contribution Graph"
                                className="w-full mb-6"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                {/* GitHub Statistics Card */}
                                <img
                                    src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&count_private=true&hide_border=true&theme=github_dark&bg_color=0D1117&title_color=58a6ff&icon_color=58a6ff&text_color=c9d1d9&include_all_commits=true`}
                                    alt="GitHub Statistics"
                                    className="w-full rounded-lg border border-gray-700"
                                />

                                {/* GitHub Top Languages */}
                                <img
                                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&hide_border=true&theme=github_dark&bg_color=0D1117&title_color=58a6ff&text_color=c9d1d9&langs_count=6`}
                                    alt="GitHub Top Languages"
                                    className="w-full rounded-lg border border-gray-700"
                                />
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-4">
                        Lihat kontribusi GitHub saya secara lengkap di{' '}
                        <a
                            href={`https://github.com/${GITHUB_USERNAME}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            profil GitHub
                        </a>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Recent Repositories */}
                    <div className="md:col-span-2 bg-[#161b22] p-6 rounded-xl border border-gray-700 shadow-xl">
                        <h3 className="text-xl font-bold mb-4">Repository Terbaru</h3>

                        {isLoading ? (
                            <div className="flex items-center justify-center h-48">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
                            </div>
                        ) : repos.length > 0 ? (
                            <div className="space-y-4">
                                {repos.map((repo) => (
                                    <div key={repo.id} className="p-4 rounded-lg bg-[#21262d] hover:bg-[#30363d] transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <a
                                                href={repo.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-bold text-blue-400 hover:underline"
                                            >
                                                {repo.name}
                                            </a>
                                            <div className="flex items-center space-x-2">
                                                {repo.language && (
                                                    <span className="flex items-center text-xs bg-[#30363d] px-2 py-1 rounded-full">
                                                        <span
                                                            className="w-2 h-2 rounded-full mr-1"
                                                            style={{ backgroundColor: languageColors[repo.language] || languageColors.null }}
                                                        ></span>
                                                        {repo.language}
                                                    </span>
                                                )}
                                                <span className="flex items-center text-xs">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                    {repo.stargazers_count}
                                                </span>
                                                <span className="flex items-center text-xs">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                                    </svg>
                                                    {repo.forks_count}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-300 mb-2">{repo.description || 'Tidak ada deskripsi'}</p>
                                        <div className="text-xs text-gray-400">Updated {formatDate(repo.updated_at)}</div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8 text-gray-400">
                                Tidak ada repository yang ditemukan
                            </div>
                        )}

                        <div className="mt-6 text-center">
                            <a
                                href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                Lihat semua repository
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* GitHub Stats */}
                    <div className="bg-[#161b22] p-6 rounded-xl border border-gray-700 shadow-xl">
                        <h3 className="text-xl font-bold mb-4">GitHub Stats</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-[#21262d] p-4 rounded-lg text-center">
                                <div className="text-3xl font-bold text-blue-400 mb-1">{stats.repos}</div>
                                <div className="text-sm text-gray-400">Repositories</div>
                            </div>
                            <div className="bg-[#21262d] p-4 rounded-lg text-center">
                                <div className="text-xl font-bold text-blue-400 mb-1">
                                    <a
                                        href={`https://github.com/${GITHUB_USERNAME}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        Lihat Kontribusi
                                    </a>
                                </div>
                                <div className="text-sm text-gray-400">Contributions</div>
                            </div>
                            <div className="bg-[#21262d] p-4 rounded-lg text-center">
                                <div className="text-xl font-bold text-blue-400 mb-1">
                                    <a
                                        href={`https://github.com/pulls?q=is%3Apr+author%3A${GITHUB_USERNAME}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        Lihat PRs
                                    </a>
                                </div>
                                <div className="text-sm text-gray-400">Pull Requests</div>
                            </div>
                            <div className="bg-[#21262d] p-4 rounded-lg text-center">
                                <div className="text-xl font-bold text-blue-400 mb-1">
                                    <a
                                        href={`https://github.com/issues?q=is%3Aissue+author%3A${GITHUB_USERNAME}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        Lihat Issues
                                    </a>
                                </div>
                                <div className="text-sm text-gray-400">Issues</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubActivitySection;