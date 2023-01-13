import React from 'react';
import '../../../Common/css/styles.css';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';
import CommentInput from '../../../Common/Shared/CommentInput';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';

const code1 = `if 5 > 2: 
    print("Five is greater than two!")`;

const code2 = `if 5 > 2: 
print("Five is greater than two!")`;

const code3 = `if 5 > 2: 
    print("Five is greater than two!") 
if 5 > 2: 
        print("Five is greater than two!")`;

const code4 = `if 5 > 2: 
    print("Five is greater than two!") 
        print("Five is greater than two!")`;

const Python_Syntax = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন সিনট্যাক্স</h1> <br />
                <div>
                    <div>
                        <h3>এক্সিকিউট পাইথন সিনট্যাক্স</h3>
                        <p>আমরা আগের পৃষ্ঠায় শিখেছি, পাইথন সিনট্যাক্স সরাসরি কমান্ড লাইনে লিখে এক্সিকিউট করা যেতে পারেঃ</p>
                        <div className='clipboard-terminal'>
                            <pre>
                                &gt;&gt;&gt; print("Hello, World!") <br />
                                Hello, World!</pre>
                        </div>
                        <p className='pt-3'>অথবা সার্ভারে একটি পাইথন ফাইল <mark>.py</mark> ফাইল এক্সটেনশন ব্যবহার করে তৈরি করে কমান্ড লাইনে চালান যায়ঃ</p>
                        <div className='clipboard-terminal'>
                            <pre>C:\Users\Your Name&gt;python myfile.py</pre>
                        </div>
                    </div>
                    <div>
                        <h3 className='pt-3'>পাইথন ইন্ডেন্টেশন</h3>
                        <p>ইন্ডেন্টেশন বলতে, একটি কোড লাইনের শুরুতে স্পেস বোঝায়।</p>
                        <p>অন্যান্য প্রোগ্রামিং ভাষায় কোডে ইন্ডেন্টেশন শুধুমাত্র পঠনযোগ্যতার জন্য ব্যবহার করা হয় কিন্তু পাইথনে ইন্ডেন্টেশন কোডের একটি ব্লক নির্দেশ করে, তাই পাইথনে ইন্ডেন্টেশন খুবই গুরুত্বপূর্ণ।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <p className='pt-3'>আপনি ইন্ডেন্টেশন এড়িয়ে গেলে পাইথন আপনাকে একটি এরর দিবে।</p>
                        <div className='clipboard-error'>
                            <h4>উদাহরণঃ</h4>
                            <p>সিনট্যাক্স এররঃ</p>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <p className='pt-3'>একজন প্রোগ্রামার হিসাবে স্পেস সংখ্যা আপনার উপর নির্ভর করে, তবে সবচেয়ে সাধারণ ব্যবহার হলো চার, কিন্তু এটি কমপক্ষে একটি হতে হবে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code3}></Code>
                        </div>
                        <p className='pt-3'>আপনাকে কোডের একই ব্লকে একই সংখ্যক স্পেস ব্যবহার করতে হবে, অন্যথায় পাইথন আপনাকে একটি এরর দিবে।</p>
                        <div className='clipboard-error'>
                            <h4>উদাহরণঃ</h4>
                            <p>সিনট্যাক্স এররঃ</p>
                            <Code language='python' code={code4}></Code>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="syntax"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="syntax"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_Syntax;