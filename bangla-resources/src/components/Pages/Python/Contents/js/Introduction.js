import React from 'react';
import '../css/styles.css';

const Introduction = () => {
    return (
        <div className='' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>ভূমিকা</h1> <br />
                <div>
                    <h3>পাইথন কি?</h3>
                    <p>পাইথন একটি জনপ্রিয় প্রোগ্রামিং ভাষা। এই প্রোগ্রামিং ভাষাটি <mark>গুইডো ভ্যান রোসাম</mark> তৈরি করেন এবং <mark>১৯৯১</mark> সালে প্রকাশ করেন।</p>
                    <h5>ব্যবহারঃ</h5>
                    <ul>
                        <li>ওয়েব ডেভেলপমেন্ট</li>
                        <li>সফটওয়্যার ডেভেলপমেন্ট</li>
                        <li>গণিতশাস্ত্র</li>
                        <li>সিস্টেম স্ক্রিপ্টিং</li>
                    </ul>
                    <h3>পাইথন কি করতে পারে?</h3>
                    <ul>
                        <li>ওয়েব অ্যাপ্লিকেশন তৈরি করতে সার্ভারে পাইথন ব্যবহার করা যায়।</li>
                        <li>ওয়ার্কফ্লো তৈরি করতে সফ্টওয়্যারের পাশাপাশি পাইথন ব্যবহার করা যায়।</li>
                        <li>পাইথন ডাটাবেস সিস্টেমে ব্যবহার করা যায়। এটি ফাইলগুলি পড়তে এবং সংশোধন করতে পারে।</li>
                        <li>পাইথন বিগ ডেটা পরিচালনা করতে এবং জটিল গণিত সম্পাদন করতে ব্যবহার করা যায়।</li>
                        <li>পাইথন দ্রুত প্রোটোটাইপিং বা প্রডাকশন-রেডি সফটওয়্যার ডেভেলপমেন্টে ব্যবহার করা যায়।</li>
                    </ul>
                    <h3>পাইথন কেন?</h3>
                    <ul>
                        <li>পাইথন বিভিন্ন প্ল্যাটফর্মে কাজ করে (উইন্ডোজ, ম্যাক, লিনাক্স, রাস্পবেরি পাই, ইত্যাদি)।</li>
                        <li>পাইথনের ইংরেজি ভাষার অনুরূপ একটি সাধারণ সিনট্যাক্স রয়েছে।</li>
                        <li>পাইথনের সিনট্যাক্স ডেভেলপারদের অন্য কিছু প্রোগ্রামিং ভাষার তুলনায় কম লাইনে প্রোগ্রাম লিখতে দেয়।</li>
                        <li>পাইথন একটি ইন্টারপ্রেটার সিস্টেমে চলে, অর্থাৎ কোড লেখার সাথে সাথেই এক্সিকিউট করা যায়। এর মানে হল যে প্রোটোটাইপিং খুব দ্রুত হতে পারে।</li>
                        <li>পাইথনকে প্রসিডিউরাল উপায়ে, ওজেক ওরিয়েন্টেড উপায়ে বা ফাংশনাল উপায়ে ব্যবহার করা যায়।</li>
                    </ul>
                    <h3>জানা থাকা ভালোঃ</h3>
                    <ul>
                        <li>পাইথনের সবচেয়ে সাম্প্রতিক প্রধান সংস্করণ হল <mark>পাইথন 3</mark>, যা আমরা এই টিউটোরিয়ালে ব্যবহার করব। যাইহোক, <mark>পাইথন 2</mark>, যদিও নিরাপত্তা আপডেট ছাড়া অন্য কিছুর সাথে আপডেট করা হচ্ছে না, তবুও এটি বেশ জনপ্রিয়।</li>
                        <li>একটি ইন্টিগ্রেটেড ডেভেলপমেন্ট এনভায়রনমেন্টে পাইথন লেখা সম্ভব, যেমন <mark>Thony</mark>, <mark>Pycharm</mark>, <mark>Netbeans</mark> বা <mark>Eclipse</mark> যা পাইথন ফাইলের বড় সংগ্রহ পরিচালনা করার সময় বিশেষভাবে কার্যকর।</li>
                    </ul>
                    <h3>অন্যান্য প্রোগ্রামিং ভাষার তুলনায় পাইথন সিনট্যাক্স</h3>
                    <ul>
                        <li>পাইথন পঠনযোগ্যতার জন্য ডিজাইন করা হয়েছিল এবং গণিতের এবং ইংরেজি ভাষার সাথে কিছু মিল রয়েছে।</li>
                        <li>পাইথন একটি কমান্ড সম্পূর্ণ করতে নতুন লাইন ব্যবহার করে, অন্যান্য প্রোগ্রামিং ভাষায় এর বিপরীতে প্রায়শই সেমিকোলন বা বন্ধনী ব্যবহার করে।</li>
                        <li>পাইথন ইন্ডেন্টেশনের উপর নির্ভর করে, হোয়াইটস্পেস ব্যবহার করে, যেমন লুপ, ফাংশন এবং ক্লাস ইত্যাদি। অন্যান্য প্রোগ্রামিং ভাষা প্রায়ই এই উদ্দেশ্যে কার্লি-ব্রাকেট ব্যবহার করে।</li>
                    </ul>
                    <div className='clipboard'>
                        <h3>উদাহরণ</h3>
                        <pre>
                            print("Hello, World!")
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;