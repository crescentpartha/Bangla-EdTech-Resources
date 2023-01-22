import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `thisset = {"apple", "banana", "cherry"}
print(thisset)`;

const code2 = `thisset = {"apple", "banana", "cherry", "apple"}

print(thisset)`;

const code3 = `thisset = {"apple", "banana", "cherry"}

print(len(thisset))`;

const code4 = `set1 = {"apple", "banana", "cherry"}
set2 = {1, 5, 7, 9, 3}
set3 = {True, False, False}`;

const code5 = `set1 = {"abc", 34, True, 40, "male"}`;

const code6 = `myset = {"apple", "banana", "cherry"}
print(type(myset))`;

const code7 = `thisset = set(("apple", "banana", "cherry")) # note the double round-brackets
print(thisset)`;

const Python_Sets = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন সেট</h1> <br />
                <div>
                    <div>
                        <h3>সেট</h3>
                        <p>একটি একক ভেরিয়েবলের মধ্যে একাধিক আইটেম সংরক্ষণ করতে সেট ব্যবহার করা হয়।</p>
                        <p>সেট হল পাইথনে 4টি অন্তর্নির্মিত ডেটা টাইপ্স এর মধ্যে একটি যা ডেটা সংগ্রহের জন্য ব্যবহৃত হয়, অন্য 3টি হল <mark>List</mark>, <mark>Tuple</mark> এবং <mark>Dictionary</mark>, যার সবগুলিরই বিভিন্ন গুণাবলী এবং ব্যবহার আছে।</p>
                        <p>একটি সেট এমন একটি সংগ্রহ যা ক্রমবিহীন, অপরিবর্তনীয়<b>*</b>, এবং সূচীহীন।</p>
                        <p>সেটগুলি কোঁকড়া বন্ধনী দিয়ে লেখা হয়।</p>
                        <p className='border rounded p-2'><b>*নোট:</b> সেট আইটেম অপরিবর্তনীয়, কিন্তু আপনি আইটেম সরাতে এবং নতুন আইটেম যোগ করতে পারেন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <h3 className="mt-3">সেট আইটেম</h3>
                        <p>লিস্ট আইটেম হলো অর্ডার, অপরিবর্তনযোগ্য, এবং অনুলিপিযোগ্য বিহীন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>ডুপ্লিকেট মান উপেক্ষা করা হবেঃ</p>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <h3 className='mt-3'>একটি সেটের দৈর্ঘ্য নির্ণয়ঃ</h3>
                        <p>একটি সেটে কতগুলি আইটেম আছে তা নির্ধারণ করতে, <mark>len()</mark> ফাংশনটি ব্যবহার করা হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>সেটের আইটেমের সংখ্যা প্রিন্ট করবেঃ</p>
                            <Code language='python' code={code3}></Code>
                        </div>
                        <h3 className="mt-3">সেট আইটেম - ডেটা টাইপ্স</h3>
                        <p>সেট আইটেম যে কোনো ডেটা টাইপের হতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>স্ট্রিং, ইন্টিজার এবং বুলিয়ান ডেটা টাইপ্স।</p>
                            <Code language='python' code={code4}></Code>
                        </div>
                        <p className='mt-3'>একটি সেটে বিভিন্ন ধরনের ডেটা থাকতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>স্ট্রিং, ইন্টিজার এবং বুলিয়ান ডেটা।</p>
                            <Code language='python' code={code5}></Code>
                        </div>
                        <h3 className="mt-3">type()</h3>
                        <p>পাইথনের দৃষ্টিকোণ থেকে, সেটগুলিকে ডেটা টাইপ 'সেট' সহ অবজেক্ট হিসাবে সংজ্ঞায়িত করা হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>একটি সেটের ডাটা টাইপ কি?</p>
                            <Code language='python' code={code6}></Code>
                        </div>
                        <h3 className="mt-3">set() কনস্ট্রাক্টর</h3>
                        <p>একটি নতুন সেট তৈরি করার সময় <mark>set()</mark> কনস্ট্রাক্টর ব্যবহার করাও সম্ভব।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>একটি সেট তৈরি করতে <mark>set()</mark> কনস্ট্রাক্টর ব্যবহার করা হয়েছে।</p>
                            <Code language='python' code={code7}></Code>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="sets"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="sets"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_Sets;