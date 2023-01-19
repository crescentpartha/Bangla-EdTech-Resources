import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `x = 5
y = "John"
print(x)
print(y)`;

const code2 = `x = 4       # x is of type int
x = "Sally" # x is now of type str
print(x)`;

const code3 = `x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0`;

const code4 = `x = 5
y = "John"
print(type(x))
print(type(y))`;

const code5 = `x = "John"
# is the same as
x = 'John'`;

const code6 = `a = 4
A = "Sally"
#A will not overwrite a`;

const Python_Variables = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন ভেরিয়েবল</h1> <br />
                <div>
                    <div>
                        <h3>ভেরিয়েবল</h3>
                        <p>ভেরিয়েবল হল ডাটার মান সংরক্ষণের পাত্র।</p>
                        <h3>ভেরিয়েবল তৈরি করা</h3>
                        <p>ভেরিয়েবল ডিক্লেয়ার করার জন্য পাইথনের কোন কমান্ড নেই। একটি ভেরিয়েবল তৈরি হয়, যে মুহূর্তে আপনি এটিতে একটি মান নির্ধারণ করেন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <p className='mt-3'>ভেরিয়েবলগুলিকে কোনো নির্দিষ্ট টাইপে ডিক্লেয়ার করার প্রয়োজন নেই, এবং এমনকি সেগুলি সেট করার পরেও টাইপ পরিবর্তন করতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <h3 className='mt-3'>কাস্টিং</h3>
                        <p>আপনি যদি একটি ভেরিয়েবলের ডেটা টাইপ নির্দিষ্ট করতে চান তবে এটি কাস্টিংয়ের মাধ্যমে করা যেতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code3}></Code>
                        </div>
                        <h3 className='mt-3'>টাইপ পেতে চাইলে</h3>
                        <p>আপনি <mark>type()</mark> ফাংশন দিয়ে একটি ভেরিয়েবলের ডেটা টাইপ পেতে পারেন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code4}></Code>
                        </div>
                        <h3 className='mt-3'>একক বা দ্বৈত উদ্ধৃতি?</h3>
                        <p>স্ট্রিং ভেরিয়েবল একক বা ডবল উদ্ধৃতি ব্যবহার করে ডিক্লেয়ার করা যেতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code5}></Code>
                        </div>
                        <h3 className='mt-3'>কেইস সেন্সেটিভ</h3>
                        <p>ভেরিয়েবলের নামগুলি কেইস সেন্সেটিভ</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code6}></Code>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="variables"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="variables"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_Variables;