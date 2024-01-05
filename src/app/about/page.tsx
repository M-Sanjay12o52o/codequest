import Subscribe from '@/components/Subscribe';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import React from 'react';

type Props = {};

const Page = (props: Props) => {
    return (
        <div className='ml-20 mt-8 mr-20 flex flex-row'>
            <Card className='mr-4 w-2/3'>
                <CardHeader className='text-xl'>
                    About
                </CardHeader>
                <CardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sit ut eveniet id distinctio expedita quibusdam est, vel totam nemo atque soluta blanditiis ipsam? Aut odio sed ipsum suscipit vero?
                    Perspiciatis illo itaque tempora dolor dolorem vitae obcaecati, iste placeat. Earum totam, porro ad dolorem ea et voluptates dolore fugiat. Odit dignissimos non eligendi! Assumenda eaque impedit cum eligendi fuga.
                    Eos adipisci earum doloribus blanditiis eius ea quae! Modi ea sapiente voluptate quis at quae facere dolores fugiat consequatur, cupiditate excepturi doloremque accusantium maiores ullam labore illum, earum placeat sed.
                    Repellat dolorum iure voluptatem voluptate minus delectus et? Doloremque recusandae atque quam ea. Sed doloribus, saepe enim dicta quisquam eveniet sint distinctio, aperiam ad iste libero, facilis error dolor culpa!
                    Explicabo, obcaecati accusamus dignissimos quis velit pariatur nam fugiat fugit possimus eaque inventore voluptas unde, debitis nemo nihil, ex saepe quo? Fugit consequatur blanditiis animi dicta unde odit aperiam quia!
                </CardContent>
            </Card>
            <div className='w-1/3'>
                <Subscribe />
            </div>
        </div>
    );
};

export default Page;
