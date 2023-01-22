import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `thisdict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}
print(thisdict)`;

const code2 = `thisdict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}
print(thisdict["brand"])`;

const code3 = `thisdict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964,
    "year": 2020
}
print(thisdict)`;

const code4 = `print(len(thisdict))`;

const code5 = `thisdict = {
    "brand": "Ford",
    "electric": False,
    "year": 1964,
    "colors": ["red", "white", "blue"]
}`;

const code6 = `thisdict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}
print(type(thisdict))`;

const code7 = `thisdict = dict(name = "John", age = 36, country = "Norway")
print(thisdict)`;

const Python_Dictionaries = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন ডিকশনারি</h1> <br />
                <div>
                    <div>
                        <h3>ডিকশনারি</h3>
                        <p>ডিকশনারি ডেটার মান <mark>কি:ভেলু</mark> পেয়ারে (key:value pairs) সংরক্ষণ করতে ব্যবহৃত হয়।</p>
                        <p>একটি ডিকশনারি হল একটি সংগ্রহ যা অর্ডার এবং পরিবর্তনযোগ্য কিন্তু অনুলিপিযোগ্য নয়।</p>
                        <p>ডিকশনারিগুলি কোঁকড়া বন্ধনী দিয়ে লেখা হয় এবং এতে কী এবং মান রয়েছে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <h3 className="mt-3">ডিকশনারি আইটেম</h3>
                        <p>ডিকশনারি আইটেম হলো অর্ডার এবং পরিবর্তনযোগ্য কিন্তু অনুলিপিযোগ্য নয়।</p>
                        <p>ডিকশনারি আইটেমগুলিকে <mark>কি:ভেলু</mark> পেয়ারে প্রকাশ করা হয় এবং কী এর নাম ব্যবহার করে উল্লেখ করা যেতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <h3 className="mt-3">অনুলিপি অনুমোদিত নয়</h3>
                        <p>ডিকশনারিতে একই কী সহ দুটি আইটেম থাকতে পারে না।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code3}></Code>
                        </div>
                        <h3 className='mt-3'>ডিকশনারির দৈর্ঘ্য নির্ধারণ</h3>
                        <p>একটি ডিকশনারিতে কতগুলি আইটেম আছে তা নির্ধারণ করতে, <mark>len()</mark> ফাংশনটি ব্যবহার করা হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>ডিকশনারি আইটেমের সংখ্যা প্রিন্ট করবে।</p>
                            <Code language='python' code={code4}></Code>
                        </div>
                        <h3 className="mt-3">ডিকশনারি আইটেম - ডেটা টাইপ্স</h3>
                        <p>ডিকশনারি আইটেম যে কোনো ডেটা টাইপের হতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>স্ট্রিং, ইন্টিজার এবং বুলিয়ান ডেটা টাইপ্স।</p>
                            <Code language='python' code={code5}></Code>
                        </div>
                        <h3 className="mt-3">type()</h3>
                        <p>পাইথনের দৃষ্টিকোণ থেকে, ডিকশনারিগুলিকে ডেটা টাইপ <mark>'dict'</mark> সহ অবজেক্ট হিসাবে সংজ্ঞায়িত করা হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>একটি ডিকশনারির ডাটা টাইপ কি?</p>
                            <Code language='python' code={code6}></Code>
                        </div>
                        <h3 className="mt-3">dict() কনস্ট্রাক্টর</h3>
                        <p>একটি নতুন ডিকশনারি তৈরি করার সময় <mark>dict()</mark> কনস্ট্রাক্টর ব্যবহার করাও সম্ভব।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>একটি ডিকশনারি তৈরি করতে <mark>dict()</mark> কনস্ট্রাক্টর ব্যবহার করা হয়েছে।</p>
                            <Code language='python' code={code7}></Code>
                        </div>
                        <div className='mt-3'>
                            <h3>পাইথন কলেকশন্স (অ্যারে)</h3>
                            <p>পাইথন প্রোগ্রামিং ভাষায় চারটি কালেকশনের ডেটা টাইপ্স রয়েছে।</p>
                            <ul>
                                <li><mark>লিস্ট</mark> হল একটি কালেকশান বা সংগ্রহ যা অর্ডার, পরিবর্তনযোগ্য এবং ডুপ্লিকেট সদস্যদের অনুমতি দেয়।</li>
                                <li><mark>টাপল</mark> হল একটি কালেকশান বা সংগ্রহ যা অর্ডার, অপরিবর্তনীয়। ডুপ্লিকেট সদস্যদের অনুমতি দেয়।</li>
                                <li><mark>সেট</mark> হল একটি সংগ্রহ যা ক্রমবিহীন, অপরিবর্তনীয়, এবং সূচীহীন। কোনো সদৃশ সদস্য নেই।</li>
                                <li><mark>ডিকশনারী</mark> হল এমন একটি সংগ্রহ যা অর্ডার এবং পরিবর্তনযোগ্য। কোনো সদৃশ সদস্য নেই।</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="dictionaries"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="dictionaries"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_Dictionaries;