import React from 'react';
import { Card, CardContent, CardHeader } from './card';
import SubmissionActivity from '../SubmissionActivity';
import { Questions } from '../../../data/Data';
import LineChart from '../LineChart';

const Problems = () => {
    return (
        <div className='flex mr-14 ml-20 mt-4'>
            <Card className='w-3/4 mr-4'>
                <CardHeader className='text-xl bg-blue-500'>All Problems</CardHeader>
                <CardContent className=''>
                    <ul className=''>
                        {Questions.map((question, index) => (
                            <li key={index} className='border-b border-gray-600 mt-4'>
                                <div className=''>
                                    <p>{question.problemId}</p>
                                    <div>
                                        <a href={`problems/${question.problemId}`} className='p-2 block hover:text-gray-700'>
                                            {question.name}
                                        </a>
                                    </div>
                                    <p className='pl-2 pb-2 pt-1 text-sm'>{question.tags.join(', ')}</p>
                                </div>
                                <div className=''>
                                    <span className=''>
                                        recently solved by username
                                    </span>
                                    {/* TODO: Add user profile picture here */}
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <div className='w-1/4'>
                <LineChart />
            </div>
        </div>
    );
};

export default Problems;
