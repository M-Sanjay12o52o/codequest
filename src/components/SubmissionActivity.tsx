import React, { useState } from 'react';
import LineChart from './LineChart';
import { Card, CardContent, CardHeader } from './ui/card';
import submissionData from '../../data/Data'; // Import the submission data array

type Props = {}

const SubmissionActivity = (props: Props) => {
    const getStatusImage = (status: string) => {
        return status === 'Solved' ? '/right.png' : '/cross.png';
    };

    return (
        <div className='mr-20 ml-20 mt-4 flex'>
            <Card className='h-full w-3/4'>
                <CardHeader className='text-xl font-semibold'>
                    Submissions
                </CardHeader>
                <CardContent>
                    {submissionData.map((submission: any, index: number) => (
                        <div key={index} className="flex items-center justify-between border-b-2 py-2 hover:bg-gray-100">
                            <div className="flex-1">{submission.user} ({submission.username})</div>
                            <div className="flex-1 text-center">{submission.problemNumber}</div>
                            <div className="flex-1 text-right">{submission.timeSince}</div>
                            <div className="flex-1 text-center ml-28">
                                <img className='w-6 h-6' src={getStatusImage(submission.status)} alt={submission.status} />
                            </div>                        </div>
                    ))}
                </CardContent>
            </Card>
            <div className='w-1/4 ml-2'>
                <LineChart />
            </div>
        </div>
    )
}

export default SubmissionActivity;
