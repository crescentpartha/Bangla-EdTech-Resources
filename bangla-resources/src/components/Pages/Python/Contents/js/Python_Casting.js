import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `x = int(1)   # x will be 1
y = int(2.8) # y will be 2
z = int("3") # z will be 3`; 

const code2 = `x = float(1)     # x will be 1.0
y = float(2.8)   # y will be 2.8
z = float("3")   # z will be 3.0
w = float("4.2") # w will be 4.2`;

const code3 = `x = str("s1") # x will be 's1'
y = str(2)    # y will be '2'
z = str(3.0)  # z will be '3.0'`;

const Python_Casting = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন কাস্টিং</h1> <br />
                <div>
                    <div>
                        <h3>ভেরিয়েবল টাইপ নির্ধারণ</h3>
                        <p>এমন সময় হতে পারে যখন আপনি একটি ভেরিয়েবলের উপর একটি টাইপ নির্দিষ্ট করতে চান। এটি কাস্টিং দিয়ে করা যেতে পারে। পাইথন একটি অবজেক্ট-অরিয়েন্টেড ল্যাঙ্গুয়েজ, এবং এটির প্রিমিটিভ টাইপগুলি সহ ডেটা টাইপগুলিকে সংজ্ঞায়িত করতে ক্লাসগুলি ব্যবহার করে।</p>
                        <p>পাইথনে কাস্টিং তাই কনস্ট্রাক্টর ফাংশন ব্যবহার করে করা হয়।</p>
                        <ul>
                            <li><mark>int()</mark> - একটি পূর্ণসংখ্যা লিটারেল থেকে একটি পূর্ণসংখ্যা তৈরি করে, একটি ফ্লোট লিটারেল (সমস্ত দশমিক মুছে ফেলে), বা একটি স্ট্রিং লিটারেল (স্ট্রিংটি একটি সম্পূর্ণ সংখ্যার প্রতিনিধিত্ব করে)।</li>
                            <li><mark>float()</mark> - একটি পূর্ণসংখ্যা লিটারেল, একটি ফ্লোট লিটারেল বা একটি স্ট্রিং লিটারেল থেকে একটি ফ্লোট সংখ্যা তৈরি করে (স্ট্রিংটি একটি ফ্লোট বা একটি পূর্ণসংখ্যাকে উপস্থাপন করে)।</li>
                            <li><mark>str()</mark> - স্ট্রিং, ইন্টিজার লিটারেল এবং ফ্লোট লিটারেলসহ বিভিন্ন ধরণের ডেটা থেকে একটি স্ট্রিং তৈরি করে।</li>
                        </ul>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>ইন্টিজার</p>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <div className='clipboard mt-3'>
                            <h4>উদাহরণঃ</h4>
                            <p>ফ্লোট</p>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <div className='clipboard mt-3'>
                            <h4>উদাহরণঃ</h4>
                            <p>স্ট্রিং</p>
                            <Code language='python' code={code3}></Code>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="casting"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="casting"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_Casting;