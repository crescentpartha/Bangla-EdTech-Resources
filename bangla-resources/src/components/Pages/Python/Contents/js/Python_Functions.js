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

const code4 = `def my_function(fname, lname):
  print(fname + " " + lname)

my_function("Emil", "Refsnes")`;

const code5 = `def my_function(fname, lname):
  print(fname + " " + lname)

my_function("Emil")`;

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
                        <h3 className='mt-3'>একটি ফাংশন কলিং</h3>
                        <p>একটি ফাংশন কল করতে, বন্ধনী <mark>( )</mark> দ্বারা অনুসরণ ফাংশন নাম ব্যবহার করুন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <h3 className="mt-3">আর্গুমেন্ট</h3>
                        <p>তথ্য আর্গুমেন্ট হিসাবে ফাংশন মধ্যে পাস করা যেতে পারে।</p>
                        <p>আর্গুমেন্টগুলি বন্ধনীর ভিতরে ফাংশনের নামের পরে নির্দিষ্ট করা হয়। আপনি যতগুলো আর্গুমেন্ট চান যোগ করতে পারেন, শুধু একটি কমা দিয়ে আলাদা করুন।</p>
                        <p>নিম্নলিখিত উদাহরণে একটি আর্গুমেন্ট (fname) সহ একটি ফাংশন রয়েছে। যখন ফাংশনটি কল করা হয়, তখন আমরা একটি প্রথম নাম দিয়ে যাই, যা পুরো নাম মুদ্রণ করতে ফাংশনের ভিতরে ব্যবহৃত হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code3}></Code>
                        </div>
                        <h3 className="mt-3">প্যারামিটার বা আর্গুমেন্ট?</h3>
                        <p>প্যারামিটার এবং আর্গুমেন্ট একই জিনিসের জন্য ব্যবহার করা হয়, একটি ফাংশনে তথ্য পাস করা।</p>
                        <p>একটি ফাংশন এর দৃষ্টিকোণ থেকেঃ</p>
                        <p>একটি প্যারামিটার হল ফাংশনের সংজ্ঞায় বন্ধনীর ভিতরে তালিকাভুক্ত ভেরিয়েবল।</p>
                        <p>একটি আর্গুমেন্ট হল সেই মান যা ফাংশনে পাঠানো হয় যখন এটি কল করা হয়।</p>
                        <h3>আর্গুমেন্টের সংখ্যা</h3>
                        <p>ডিফল্টরূপে, সঠিক সংখ্যক আর্গুমেন্ট সহ একটি ফাংশন কল করা আবশ্যক। এর মানে হল যে যদি আপনার ফাংশন ২টি আর্গুমেন্ট আশা করে, তাহলে আপনাকে ২টি আর্গুমেন্ট সহ ফাংশনটিকে কল করতে হবে, বেশি নয় এবং কম নয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>এই ফাংশনটি 2টি আর্গুমেন্ট আশা করে এবং 2টি আর্গুমেন্ট পায়ঃ</p>
                            <Code language='python' code={code4}></Code>
                        </div>
                        <p className="mt-3">আপনি ১টি বা ৩টি আর্গুমেন্ট সহ ফাংশন কল করার চেষ্টা করলে, আপনি একটি ত্রুটি পাবেন।</p>
                        <div className='clipboard-error'>
                            <h4>উদাহরণঃ</h4>
                            <p>এই ফাংশনটি ২টি আর্গুমেন্ট আশা করে, কিন্তু মাত্র ১টি পায়।</p>
                            <Code language='python' code={code5}></Code>
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