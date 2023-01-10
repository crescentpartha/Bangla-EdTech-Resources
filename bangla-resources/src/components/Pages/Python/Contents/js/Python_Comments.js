import React from 'react';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `#This is a comment
print("Hello, World!")`;

const code2 = `print("Hello, World!") #This is a comment`;

const code3 = `#print("Hello, World!")
print("Cheers, Mate!")`;

const code4 = `#This is a comment
#written in
#more than just one line
print("Hello, World!")`;

const code5 = `"""
This is a comment
written in
more than just one line
"""
print("Hello, World!")`;

const Python_Comments = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন কমেন্ট</h1> <br />
                <div>
                    <div>
                        <p>পাইথন কোড ব্যাখ্যা করতে মন্তব্য ব্যবহার করা যেতে পারে। <br /> কোডটি আরও পঠনযোগ্য করতে মন্তব্য ব্যবহার করা যেতে পারে।</p>
                        <h3>কিভাবে কমেন্ট করতে হয়</h3>
                        <p>কমেন্টগুলি একটি <mark>#</mark> দিয়ে শুরু হয়, এবং পাইথন তাদের উপেক্ষা করবে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <p className='mt-2'>কমেন্ট একটি লাইনের শেষে স্থাপন করা যেতে পারে, এবং পাইথন বাকি লাইন উপেক্ষা করবে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <p className='mt-2'>একটি কমেন্ট শুধুমাত্র কোডকে ব্যাখ্যাই করে না, এটি পাইথনকে কোড চালানো থেকে বিরত রাখতেও ব্যবহার করা হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code3}></Code>
                        </div>
                    </div>
                    <div>
                        <h3 className='mt-2'>মাল্টি লাইন কমেন্ট</h3>
                        <p>মাল্টি লাইনের কমেন্টের জন্য পাইথনে আসলে কোনো সিনট্যাক্স নেই। <br /> একটি মাল্টিলাইন কমেন্ট যোগ করতে আপনি প্রতিটি লাইনের জন্য একটি <mark>#</mark> চিহ্ন ব্যবহার করতে পারেন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code4}></Code>
                        </div>
                        <p className='mt-2'>অথবা, আপনি একটি মাল্টিলাইন স্ট্রিং ব্যবহার করতে পারেন। <br /> আপনি আপনার কোডে একটি মাল্টিলাইন স্ট্রিং (ট্রিপল উদ্ধৃতি) যোগ করতে পারেন এবং এর ভিতরে আপনার মন্তব্য রাখতে পারেন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code5}></Code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Python_Comments;