"use client"

import React from 'react';
import { Questions } from '../../../../data/Data';
import { Card } from '@/components/ui/card';
import { signIn, useSession } from "next-auth/react";

type Params = {
    params: {
        problemId: string;
    };
};

export default function ProblemPage({ params: { problemId } }: Params) {
    const { data: session } = useSession();

    const question = Questions.find(
        (question) => question.problemId === parseInt(problemId as string)
    );

    const renderAnswerSection = () => {
        // Render the answer section if the user is logged in
        if (session) {
            return (
                <div>
                    {/* Your answer input or textarea */}
                    <textarea
                        placeholder="Your answer..."
                        className="w-full h-32 border border-gray-300 p-2"
                    ></textarea>
                    <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">
                        Submit Answer
                    </button>
                </div>
            );
        }
        // If the user is not logged in, display a message to prompt login
        return (
            <p className="text-red-500">
                Please <button className='underline' onClick={() => signIn()}>sign in</button> to answer this question.
            </p>
        );
    };

    return (
        <Card className="ml-20 mr-20 mt-4 p-4">
            {question ? (
                <>
                    <h1 className="text-lg font-semibold">{question.name}</h1>
                    <br />
                    <p>{question.question}</p>
                    {renderAnswerSection()}
                </>
            ) : (
                <p>Question not found</p>
            )}
        </Card>
    );
}
