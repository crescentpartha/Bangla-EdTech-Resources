import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `thislist = ["apple", "banana", "cherry"]
print(thislist)`;

const code2 = `thislist = ["apple", "banana", "cherry", "apple", "cherry"]
print(thislist)`;

const code3 = `thislist = ["apple", "banana", "cherry"]
print(len(thislist))`;

const code4 = `list1 = ["apple", "banana", "cherry"]
list2 = [1, 5, 7, 9, 3]
list3 = [True, False, False]`;

const code5 = `list1 = ["abc", 34, True, 40, "male"]`;

const code6 = `mylist = ["apple", "banana", "cherry"]
print(type(mylist))`;

const code7 = `thislist = list(("apple", "banana", "cherry")) # note the double round-brackets
print(thislist)`;

const Python_Lists = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন লিস্ট</h1> <br />
                <div>
                    <div>
                        <h3>লিস্ট</h3>
                        <p>একটি একক ভেরিয়েবলের মধ্যে একাধিক আইটেম সংরক্ষণ করতে লিস্ট ব্যবহার করা হয়।</p>
                        <p>লিস্টগুলি হল পাইথনে 4টি অন্তর্নির্মিত ডেটা টাইপ্স, এর মধ্যে একটি যা ডেটা সংগ্রহের জন্য ব্যবহৃত হয়, অন্য 3টি হল <mark>Tuple</mark>, <mark>Set</mark> এবং <mark>Dictionary</mark>, যার সবগুলিরই বিভিন্ন গুণাবলী এবং ব্যবহার আছে।</p>
                        <p>বর্গাকার বন্ধনী ব্যবহার করে তালিকা তৈরি করা হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <h3 className="mt-3">লিস্ট আইটেম</h3>
                        <p>লিস্ট আইটেম হলো অর্ডার, পরিবর্তনযোগ্য, এবং অনুলিপিযোগ্য।</p>
                        <p>লিস্ট আইটেমগুলিকে ইন্ডেক্সেড করা হয়েছে, প্রথম আইটেমের ইন্ডেক্সেড হল [0], দ্বিতীয় আইটেমের ইন্ডেক্সেড হল [1] ইত্যাদি।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <h3 className='mt-3'>লিস্টের দৈর্ঘ্য</h3>
                        <p>একটি লিস্টে কতগুলি আইটেম আছে তা নির্ধারণ করতে, <mark>len()</mark> ফাংশনটি ব্যবহার করা হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>লিস্ট আইটেমের সংখ্যা প্রিন্ট করুন।</p>
                            <Code language='python' code={code3}></Code>
                        </div>
                        <h3 className="mt-3">লিস্ট আইটেম - ডেটা টাইপ্স</h3>
                        <p>লিস্ট আইটেম যে কোনো ডেটা টাইপের হতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>স্ট্রিং, ইন্টিজার এবং বুলিয়ান ডেটা টাইপ্স।</p>
                            <Code language='python' code={code4}></Code>
                        </div>
                        <p className='mt-3'>একটি লিস্টে বিভিন্ন ধরনের ডেটা থাকতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>স্ট্রিং, ইন্টিজার এবং বুলিয়ান ডেটা টাইপ্স।</p>
                            <Code language='python' code={code5}></Code>
                        </div>
                        <h3 className="mt-3">type()</h3>
                        <p>পাইথনের দৃষ্টিকোণ থেকে, লিস্টগুলিকে ডেটা টাইপ 'লিস্ট' সহ অবজেক্ট হিসাবে সংজ্ঞায়িত করা হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>একটি তালিকার ডাটা টাইপ কি?</p>
                            <Code language='python' code={code6}></Code>
                        </div>
                        <h3 className="mt-3">list() কনস্ট্রাক্টর</h3>
                        <p>একটি নতুন তালিকা তৈরি করার সময় <mark>list()</mark> কনস্ট্রাক্টর ব্যবহার করাও সম্ভব।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>একটি তালিকা তৈরি করতে <mark>list()</mark> কনস্ট্রাক্টর ব্যবহার করা হয়েছে।</p>
                            <Code language='python' code={code7}></Code>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="lists"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="lists"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_Lists;