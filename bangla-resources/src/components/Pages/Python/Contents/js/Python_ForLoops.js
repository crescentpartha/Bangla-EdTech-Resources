import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)`;

const code2 = `for x in "banana":
print(x)`;

const code3 = `fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
  if x == "banana":
    break`;

const code4 = `fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    break
  print(x)`;

const code5 = `fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    continue
  print(x)`;

const Python_ForLoops = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন ফর লোপ</h1> <br />
                <div>
                    <div>
                        <h3>ফর লোপ বা For Loops</h3>
                        <p><code>For</code> লোপ একটি অনুক্রমের উপর পুনরাবৃত্তি করার জন্য ব্যবহার করা হয় (যা হয় একটি তালিকা, একটি টিপল, একটি অভিধান, একটি সেট বা একটি স্ট্রিং)।</p>
                        <p>এটি অন্যান্য প্রোগ্রামিং ভাষার জন্য কীওয়ার্ডের মতো নয় বরং অন্যান্য অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং ভাষায় পাওয়া একটি পুনরাবৃত্তি পদ্ধতির মতো কাজ করে।</p>
                        <p><code>For</code> লুপের সাহায্যে আমরা একটি তালিকার প্রতিটি আইটেমের জন্য টুপল, সেট ইত্যাদি স্টেটমেন্টের সেট চালাতে পারি।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>প্রতিটি ফল একটি ফলের তালিকায় প্রিন্ট করুনঃ</p>
                            <Code language='python' code={code1}></Code>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="for-loops"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="for-loops"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_ForLoops;