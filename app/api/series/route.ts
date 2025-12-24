import { NextResponse } from 'next/server';

export type Series = {
    id: string;
    title: string;
    description: string;
    episodeCount: number;
    status: 'active' | 'inactive' | 'draft';
    createdAt: string;
};

const mockSeries: Series[] = [
    {
        id: '1',
        title: '웹 개발 기초',
        description: 'HTML, CSS, JavaScript 기초부터 시작하는 웹 개발',
        episodeCount: 24,
        status: 'active',
        createdAt: '2024-01-15',
    },
    {
        id: '2',
        title: 'React 마스터',
        description: 'React의 모든 것을 다루는 완벽 가이드',
        episodeCount: 32,
        status: 'active',
        createdAt: '2024-02-20',
    },
    {
        id: '3',
        title: 'TypeScript 완벽 가이드',
        description: 'TypeScript를 깊이 있게 배우는 시리즈',
        episodeCount: 18,
        status: 'active',
        createdAt: '2024-03-10',
    },
    {
        id: '4',
        title: 'Next.js 14 실전',
        description: 'Next.js 14로 실전 프로젝트 만들기',
        episodeCount: 15,
        status: 'draft',
        createdAt: '2024-04-05',
    },
    {
        id: '5',
        title: '데이터베이스 설계',
        description: 'PostgreSQL과 Prisma로 배우는 DB 설계',
        episodeCount: 20,
        status: 'inactive',
        createdAt: '2024-05-12',
    },
    {
        id: '6',
        title: 'AWS 클라우드 기초',
        description: 'AWS 서비스를 활용한 클라우드 입문',
        episodeCount: 28,
        status: 'active',
        createdAt: '2024-06-18',
    },
    {
        id: '7',
        title: 'Docker & Kubernetes',
        description: '컨테이너 오케스트레이션의 모든 것',
        episodeCount: 22,
        status: 'active',
        createdAt: '2024-07-25',
    },
    {
        id: '8',
        title: 'GraphQL API 개발',
        description: 'GraphQL로 효율적인 API 만들기',
        episodeCount: 16,
        status: 'draft',
        createdAt: '2024-08-30',
    },
];

export async function GET() {
    // 실제 API처럼 약간의 지연 추가
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(mockSeries);
}
