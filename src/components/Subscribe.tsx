import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'

type Props = {}

const Subscribe = (props: Props) => {
    return (
        <Card>
            <CardHeader className='text-xl'>
                Subscribe for updates
            </CardHeader>
            <CardContent>
                Upcoming competitions, new problems, feature additions and more. Maximum 2 emails a month. Promise.
            </CardContent>
            <br />
            <Input type='email' placeholder='Email' />
            <br />
            <Button type='submit'>Subscribe</Button>
        </Card>
    )
}

export default Subscribe