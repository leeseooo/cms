"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Zod 스키마 정의
const seriesFormSchema = z.object({
    title: z
        .string()
        .min(2, {
            message: "제목은 최소 2자 이상이어야 합니다.",
        })
        .max(100, {
            message: "제목은 100자를 초과할 수 없습니다.",
        }),
    description: z
        .string()
        .min(10, {
            message: "설명은 최소 10자 이상이어야 합니다.",
        })
        .max(500, {
            message: "설명은 500자를 초과할 수 없습니다.",
        }),
    author: z
        .string()
        .min(2, {
            message: "작성자 이름은 최소 2자 이상이어야 합니다.",
        }),
    episodes: z
        .number()
        .min(1, {
            message: "에피소드 수는 최소 1 이상이어야 합니다.",
        })
        .int({
            message: "에피소드 수는 정수만 입력 가능합니다.",
        }),
});

type SeriesFormValues = z.infer<typeof seriesFormSchema>;
const defaultValues: SeriesFormValues = {
    title: "",
    description: "",
    author: "",
    episodes: 0,
}

export default function CreateSeriesPage() {
    const router = useRouter();

    const form = useForm<SeriesFormValues>({
        resolver: zodResolver(seriesFormSchema),
        defaultValues,
    });

    const { formState } = form;
    const { disabled, isValid } = formState;

    async function onSubmit(data: SeriesFormValues) {
        try {
            console.log("폼 데이터:", data);

            // API 호출 예시
            const response = await fetch("/api/series", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("시리즈 생성에 실패했습니다.");
            }

            // 성공 시 목록 페이지로 이동
            router.push("/series");
            router.refresh();
        } catch (error) {
            console.error("에러:", error);
            alert("시리즈 생성 중 오류가 발생했습니다.");
        }
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">새 시리즈 만들기</h1>
                <p className="text-muted-foreground">
                    새로운 시리즈를 생성합니다. 모든 필드를 입력해주세요.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>제목 *</FormLabel>
                                <FormControl>
                                    <Input placeholder="시리즈 제목을 입력하세요" {...field} />
                                </FormControl>
                                <FormDescription>
                                    시리즈의 제목을 입력하세요 (2-100자).
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>설명 *</FormLabel>
                                <FormControl>
                                    <Input placeholder="시리즈 설명을 입력하세요" {...field} />
                                </FormControl>
                                <FormDescription>
                                    시리즈에 대한 간단한 설명을 입력하세요 (10-500자).
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>작성자 *</FormLabel>
                                <FormControl>
                                    <Input placeholder="작성자 이름을 입력하세요" {...field} />
                                </FormControl>
                                <FormDescription>
                                    시리즈를 작성한 사람의 이름을 입력하세요.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="episodes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>에피소드 수 *</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="에피소드 수를 입력하세요"
                                        {...field}
                                        onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                    />
                                </FormControl>
                                <FormDescription>
                                    시리즈의 총 에피소드 수를 입력하세요 (숫자만 입력).
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex gap-4">
                        <Button type="submit" disabled={!isValid || disabled}>생성하기</Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => router.back()}
                        >
                            취소
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
