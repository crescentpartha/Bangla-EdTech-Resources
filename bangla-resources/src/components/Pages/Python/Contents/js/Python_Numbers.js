import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `x = 1    # int
y = 2.8  # float
z = 1j   # complex`;

const code2 = `print(type(x))
print(type(y))
print(type(z))`;

const code3 = `x = 1
y = 35656222554887711
z = -3255522

print(type(x))
print(type(y))
print(type(z))`;

const code4 = `x = 1.10
y = 1.0
z = -35.59

print(type(x))
print(type(y))
print(type(z))`;

const code5 = `x = 35e3
y = 12E4
z = -87.7e100

print(type(x))
print(type(y))
print(type(z))`;

const code6 = `x = 3+5j
y = 5j
z = -5j

print(type(x))
print(type(y))
print(type(z))`;

const code7 = `import random

print(random.randrange(1, 10))`;

const Python_Numbers = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন নাম্বার</h1> <br />
                <div>
                    <div>
                        <p>পাইথনে তিনটি নিউমেরিক টাইপ রয়েছেঃ</p>
                        <ul>
                            <li className='my-2'><mark><code>int</code></mark></li>
                            <li className='my-2'><mark><code>float</code></mark></li>
                            <li className='my-2'><mark><code>complex</code></mark></li>
                        </ul>
                        <p>নিউমেরিক টাইপের ভেরিয়েবল তৈরি করা হয় যখন আপনি তাদের একটি মান নির্ধারণ করেন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <p className='mt-3'>পাইথনে যেকোন অবজেক্টের ধরন যাচাই করতে, <mark>type()</mark> ফাংশনটি ব্যবহার করা হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <h3 className='mt-3'>পূর্ণসংখ্যা</h3>
                        <p><mark>int</mark> or <mark>integer</mark>, একটি পূর্ণ সংখ্যা, ধনাত্মক বা ঋণাত্মক, দশমিক ছাড়া, সীমাহীন দৈর্ঘ্যের হতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code3}></Code>
                        </div>
                        <h3 className='mt-3'>ফ্লোটিং পয়েন্ট সংখ্যা</h3>
                        <p><mark>ফ্লোট</mark>, বা <mark>ফ্লোটিং পয়েন্ট সংখ্যা</mark> হল একটি সংখ্যা, ধনাত্মক বা ঋণাত্মক, এক বা একাধিক দশমিক ধারণ করে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code4}></Code>
                        </div>
                        <p className='mt-3'>ফ্লোট বৈজ্ঞানিক সংখ্যাও হতে পারে যেমন <mark>e</mark> যা ১০ এর পাওয়ার নির্দেশ করে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code5}></Code>
                        </div>
                        <h3 className='mt-3'>জটিল সংখ্যা</h3>
                        <p>জটিল সংখ্যাগুলি কাল্পনিক অংশ হিসাবে <mark>j</mark> দিয়ে লেখা হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code6}></Code>
                        </div>
                        <h3 className='mt-3'>রেন্ডম সংখ্যা</h3>
                        <p>রেন্ডম সংখ্যা তৈরি করার জন্য পাইথনের কোনো <mark>ramdom()</mark> ফাংশন নেই, তবে পাইথনের একটি বিল্ট-ইন মডিউল রয়েছে যাকে <mark>ramdom</mark> বলা হয় যা রেন্ডম সংখ্যা তৈরি করতে ব্যবহার করা যেতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code7}></Code>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="numbers"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="numbers"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_Numbers;