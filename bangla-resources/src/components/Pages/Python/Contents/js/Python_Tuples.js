import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `thistuple = ("apple", "banana", "cherry")
print(thistuple)`;

const code2 = `thistuple = ("apple", "banana", "cherry", "apple", "cherry")
print(thistuple)`;

const code3 = `thistuple = ("apple", "banana", "cherry")
print(len(thistuple))`;

const code4 = `tuple1 = ("apple", "banana", "cherry")
tuple2 = (1, 5, 7, 9, 3)
tuple3 = (True, False, False)`;

const code5 = `tuple1 = ("abc", 34, True, 40, "male")`;

const code6 = `mytuple = ("apple", "banana", "cherry")
print(type(mytuple))`;

const code7 = `thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets
print(thistuple)`;

const Python_Tuples = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন টাপল্স</h1> <br />
                <div>
                    <div>
                    <h3>টাপল</h3>
                        <p>একটি একক ভেরিয়েবলের মধ্যে একাধিক আইটেম সংরক্ষণ করতে টাপল ব্যবহার করা হয়।</p>
                        <p>টাপল হল পাইথনে 4টি অন্তর্নির্মিত ডেটা টাইপ্স এর মধ্যে একটি যা ডেটা সংগ্রহের জন্য ব্যবহৃত হয়, অন্য 3টি হল <mark>List</mark>, <mark>Set</mark> এবং <mark>Dictionary</mark>, যার সবগুলিরই বিভিন্ন গুণাবলী এবং ব্যবহার আছে।</p>
                        <p>একটি টাপল হল একটি সংগ্রহ যা অর্ডার করা হয় এবং অপরিবর্তনীয়।</p>
                        <p>টাপল বৃত্তাকার বন্ধনী ব্যবহার করে লেখা হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>টাপল তৈরি করাঃ</p>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <h3 className="mt-3">টাপল আইটেম</h3>
                        <p>টাপল আইটেম হলো অর্ডার, পরিবর্তনযোগ্য, এবং অনুলিপিযোগ্য।</p>
                        <p>টাপল আইটেমগুলিকে ইন্ডেক্সেড করা হয়েছে, প্রথম আইটেমের ইন্ডেক্সেড হল [0], দ্বিতীয় আইটেমের ইন্ডেক্সেড হল [1] ইত্যাদি।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <h3 className='mt-3'>টাপলের দৈর্ঘ্য</h3>
                        <p>একটি টাপলে কতগুলি আইটেম আছে তা নির্ধারণ করতে, <mark>len()</mark> ফাংশনটি ব্যবহার করা হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>টাপল আইটেমের সংখ্যা প্রিন্ট করবে।</p>
                            <Code language='python' code={code3}></Code>
                        </div>
                        <h3 className="mt-3">টাপল আইটেম - ডেটা টাইপ্স</h3>
                        <p>টাপল আইটেম যে কোনো ডেটা টাইপের হতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>স্ট্রিং, ইন্টিজার এবং বুলিয়ান ডেটা টাইপ্স।</p>
                            <Code language='python' code={code4}></Code>
                        </div>
                        <p className='mt-3'>একটি টাপলে বিভিন্ন ধরনের ডেটা থাকতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>স্ট্রিং, ইন্টিজার এবং বুলিয়ান ডেটা।</p>
                            <Code language='python' code={code5}></Code>
                        </div>
                        <h3 className="mt-3">type()</h3>
                        <p>পাইথনের দৃষ্টিকোণ থেকে, টাপলগুলিকে ডেটা টাইপ 'টাপল' সহ অবজেক্ট হিসাবে সংজ্ঞায়িত করা হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>একটি টাপলের ডাটা টাইপ কি?</p>
                            <Code language='python' code={code6}></Code>
                        </div>
                        <h3 className="mt-3">tuple() কনস্ট্রাক্টর</h3>
                        <p>একটি নতুন টাপল তৈরি করার সময় <mark>tuple()</mark> কনস্ট্রাক্টর ব্যবহার করাও সম্ভব।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>একটি টাপল তৈরি করতে <mark>tuple()</mark> কনস্ট্রাক্টর ব্যবহার করা হয়েছে।</p>
                            <Code language='python' code={code7}></Code>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="tuples"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="tuples"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_Tuples;