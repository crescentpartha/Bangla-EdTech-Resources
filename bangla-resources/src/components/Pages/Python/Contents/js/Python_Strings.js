import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `print("Hello")
print('Hello')`;

const code2 = `a = "Hello"
print(a)`;

const code3 = `a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)`;

const code4 = `a = '''Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.'''
print(a)`;

const Python_Strings = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন স্ট্রিং</h1> <br />
                <div>
                    <div>
                        <h3>স্ট্রিং</h3>
                        <p>পাইথনের স্ট্রিংগুলি একক উদ্ধৃতি চিহ্ন বা দ্বিগুণ উদ্ধৃতি চিহ্ন দ্বারা বেষ্টিত থাকে।</p>
                        <p><mark>'hello'</mark>, <mark>"hello"</mark> এর মতো একই জিনিস র্নিদেশ করে।</p>
                        <p>আপনি <mark>print()</mark> ফাংশন সহ একটি স্ট্রিং লিটারেল প্রদর্শন করতে পারেন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <h3 className='mt-3'>একটি ভেরিয়েবলে স্ট্রিং বরাদ্দ করুন</h3>
                        <p>একটি ভেরিয়েবলের জন্য একটি স্ট্রিং বরাদ্দ করা ভেরিয়েবল নামের সাথে একটি সমান চিহ্ন এবং স্ট্রিং দ্বারা অনুসরণ করা হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <h3 className='mt-3'>মাল্টিলাইন স্ট্রিং</h3>
                        <p>আপনি তিনটি উদ্ধৃতি ব্যবহার করে একটি ভেরিয়েবলে একটি মাল্টিলাইন স্ট্রিং বরাদ্দ করতে পারেন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>আপনি তিনটি ডবল উদ্ধৃতি ব্যবহার করতে পারেন।</p>
                            <Code language='python' code={code3}></Code>
                        </div>
                        <p className='mt-3'>অথবা তিনটি একক উদ্ধৃতি।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code4}></Code>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="strings"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="strings"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_Strings;