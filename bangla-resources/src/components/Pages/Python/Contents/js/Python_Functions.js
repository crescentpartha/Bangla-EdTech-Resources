import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `def my_function():
  print("Hello from a function")`;

const code2 = `def my_function():
  print("Hello from a function")

my_function()`;

const code3 = `def my_function(fname):
  print(fname + " Refsnes")

my_function("Emil")
my_function("Tobias")
my_function("Linus")`;

const Python_Functions = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন ফাংশন</h1> <br />
                <div>
                    <div>
                        <p>একটি ফাংশন হল কোডের একটি ব্লক যা শুধুমাত্র কল করলেই চলে।</p>
                        <p>আপনি একটি ফাংশনে ডেটা পাস করতে পারেন, যা প্যারামিটার নামে পরিচিত।</p>
                        <p>একটি ফাংশন ফলাফল হিসাবে ডেটা ফেরত দিতে পারে।</p>
                        <h3>একটি ফাংশন তৈরি করা</h3>
                        <p>পাইথনে একটি ফাংশন <mark>def</mark> কীওয়ার্ড ব্যবহার করে সংজ্ঞায়িত করা হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code1}></Code>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="functions"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="functions"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_Functions;