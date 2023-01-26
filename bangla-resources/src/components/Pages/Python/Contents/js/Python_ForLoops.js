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
                        <h3 className="mt-3">একটি স্ট্রিং মাধ্যমে লুপ</h3>
                        <p>এমনকি স্ট্রিংগুলি পুনরাবৃত্তিযোগ্য বস্তু, এতে অক্ষরের একটি ক্রম রয়েছে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p><code>banana</code> শব্দের অক্ষরগুলির মধ্য দিয়ে লুপ করুনঃ</p>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <h3 className="mt-3">ব্রেক স্টেটমেন্ট বা Break Statement</h3>
                        <p>সমস্ত আইটেমের মাধ্যমে লুপ হওয়ার আগে, ব্রেক স্টেটমেন্টের সাহায্যে আমরা লুপটি বন্ধ করতে পারি।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p><code>x</code> এর মান <code>banana</code> হলে লোপ থেকে বাহির হয়ে যাবে।</p>
                            <Code language='python' code={code3}></Code>
                        </div>
                        <div className='clipboard mt-3'>
                            <h4>উদাহরণঃ</h4>
                            <p><code>x</code> এর মান <code>banana</code> হলে লোপ থেকে বাহির হয়ে যাবে কিন্তু এইবার প্রিন্টের আগে বিরতি বা <code>break</code> আছে।</p>
                            <Code language='python' code={code4}></Code>
                        </div>
                        <h3 className="mt-3">কন্টিনিউ স্টেটমেন্ট বা Continue Statement</h3>
                        <p>কন্টিনিউ স্টেটমেন্ট দিয়ে আমরা লুপের বর্তমান পুনরাবৃত্তি বন্ধ করতে পারি এবং পরবর্তীটি চালিয়ে যেতে পারি।</p>
                        <div className='clipboard mt-3'>
                            <h4>উদাহরণঃ</h4>
                            <p>এবার <code>banana</code> প্রিন্ট করবে না।</p>
                            <Code language='python' code={code5}></Code>
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