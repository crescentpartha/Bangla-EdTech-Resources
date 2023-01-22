import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `print(10 > 9)
print(10 == 9)
print(10 < 9)`;

const code2 = `a = 200
b = 33

if b > a:
  print("b is greater than a")
else:
  print("b is not greater than a")`;

const code3 = `print(bool("Hello"))
print(bool(15))`;

const code4 = `x = "Hello"
y = 15

print(bool(x))
print(bool(y))`;

const code5 = `bool("abc")
bool(123)
bool(["apple", "cherry", "banana"])`;

const code6 = `bool(False)
bool(None)
bool(0)
bool("")
bool(())
bool([])
bool({})`;

const Python_Booleans = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন বুলিয়ানস</h1> <br />
                <div>
                    <div>
                        <p>বুলিয়ান দুটি মানের একটিকে উপস্থাপন করে: <mark>True</mark> (সত্য) বা <mark>False</mark> (মিথ্যা)।</p>
                        <h3>বুলিয়ান মান</h3>
                        <p>প্রোগ্রামিং এ আপনাকে প্রায়ই জানতে হবে যে একটি অভিব্যক্তি <mark>True</mark> (সত্য) নাকি <mark>False</mark> (মিথ্যা)।</p>
                        <p>আপনি পাইথনে যেকোনো অভিব্যক্তি মূল্যায়ন করতে পারেন এবং দুটি উত্তরের একটি পেতে পারেন, <mark>True</mark> (সত্য) বা <mark>False</mark> (মিথ্যা)।</p>
                        <p>যখন আপনি দুটি মান তুলনা করেন, তখন অভিব্যক্তিটি মূল্যায়ন করা হয় এবং পাইথন বুলিয়ান উত্তর প্রদান করে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <p className="mt-3">আপনি যখন একটি <mark>if</mark> স্টেটমেন্টে একটি শর্ত চালান, পাইথন সত্য বা মিথ্যা ফেরত দেয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>শর্তটি সত্য নাকি মিথ্যা তার উপর ভিত্তি করে একটি বার্তা প্রিন্ট হবে।</p>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <h3 className="mt-3">মান এবং ভেরিয়েবল মূল্যায়ন</h3>
                        <p><mark>bool()</mark> ফাংশন আপনাকে যেকোনো মান মূল্যায়ন করতে দেয়, এবং বিনিময়ে আপনাকে সত্য বা মিথ্যা রিটার্ন করে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>একটি স্ট্রিং এবং একটি সংখ্যা মূল্যায়ন করুন।</p>
                            <Code language='python' code={code3}></Code>
                        </div>
                        <div className='clipboard mt-3'>
                            <h4>উদাহরণঃ</h4>
                            <p>দুটি ভেরিয়েবল মূল্যায়ন করুন।</p>
                            <Code language='python' code={code4}></Code>
                        </div>
                        <h3 className="mt-3">অধিকাংশ মান সত্য</h3>
                        <p>প্রায় যেকোন মানকে সত্য হিসাবে মূল্যায়ন করা হয় যদি এতে এই ধরণের জিনিস থাকে।</p>
                        <p><mark>খালি স্ট্রিং</mark> ছাড়া যেকোনো স্ট্রিং সত্য। <mark>0</mark> ব্যতীত যেকোনো সংখ্যা সত্য।</p>
                        <p>যেকোন তালিকা, টিপল, সেট এবং অভিধান <mark>খালি ছাড়া</mark> সত্য।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>নিম্নলিখিত কোড সত্য রিটার্ন করবে।</p>
                            <Code language='python' code={code5}></Code>
                        </div>
                        <h3 className="mt-3">কিছু মান মিথ্যা</h3>
                        <p>প্রকৃতপক্ষে, <mark>()</mark>, <mark>[]</mark>, <mark>{}</mark>, <mark>""</mark>, সংখ্যা <mark>0</mark>, এবং <mark>মান নেই</mark> এর মতো খালি মান ব্যতীত মিথ্যা-এ মূল্যায়ন করা মান নেই বললেই চলে। এবং অবশ্যই <mark>মিথ্যা</mark> এর মান <mark>মিথ্যা</mark> কে মূল্যায়ন করে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code6}></Code>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="booleans"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="booleans"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_Booleans;