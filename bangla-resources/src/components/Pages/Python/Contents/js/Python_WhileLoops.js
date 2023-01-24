import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `i = 1
while i < 6:
  print(i)
  i += 1`;

const code2 = `i = 1
while i < 6:
  print(i)
  if i == 3:
    break
  i += 1`;

const code3 = `i = 0
while i < 6:
  i += 1
  if i == 3:
    continue
  print(i)`;

const code4 = `i = 1
while i < 6:
  print(i)
  i += 1
else:
  print("i is no longer less than 6")`;

const Python_WhileLoops = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন ওয়াইল লোপ</h1> <br />
                <div>
                    <div>
                        <h3>ওয়াইল লোপ বা While Loop</h3>
                        <p><code>While</code> লুপের সাহায্যে আমরা স্টেটমেন্টের একটি সেট চালাতে পারি যতক্ষণ পর্যন্ত একটি শর্ত সত্য হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>প্রিন্ট <code>i</code> যতক্ষণ পর্যন্ত <code>i</code> ৬-এর কম হয়।</p>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <h3 className='mt-3'>ব্র্যাক স্টেটমেন্ট বা Break Statement</h3>
                        <p>ব্র্যাক স্টেটমেন্ট দিয়ে আমরা লুপ বন্ধ করতে পারি যদিও <code>while</code> কন্ডিশন সত্য হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p><code>i</code> এর মান ৩ হলে, লোপ থেকে বের হয়ে যাবে।</p>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <h3 className='mt-3'>কন্টিনিউ স্টেটমেন্ট বা Continue Statement</h3>
                        <p>কন্টিনিউ স্টেটমেন্ট দিয়ে আমরা বর্তমান পুনরাবৃত্তি বন্ধ করতে পারি এবং পরবর্তীটি চালিয়ে যেতে পারি।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p><code>i</code> এর মান ৩ হলে, পরবর্তী পুনরাবৃত্তি চালিয়ে যাবে।</p>
                            <Code language='python' code={code3}></Code>
                        </div>
                        <h3 className='mt-3'>এল্স স্টেটমেন্ট বা Else Statement</h3>
                        <p>এল্স স্টেটমেন্ট দিয়ে আমরা একবার কোডের একটি ব্লক চালাতে পারি যখন শর্তটি আর সত্য হয় না।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>শর্ত মিথ্যা হলে একটি বার্তা প্রিন্ট করবে।</p>
                            <Code language='python' code={code4}></Code>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="while-loops"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="while-loops"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_WhileLoops;