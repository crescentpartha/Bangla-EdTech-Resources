import React from 'react';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `#This is a comment
print("Hello, World!")`;

const code2 = `print("Hello, World!") #This is a comment`;

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
                        <p>মন্তব্য একটি লাইনের শেষে স্থাপন করা যেতে পারে, এবং পাইথন বাকি লাইন উপেক্ষা করবে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code2}></Code>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Python_Comments;