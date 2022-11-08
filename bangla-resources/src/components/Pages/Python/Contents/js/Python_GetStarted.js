import React from 'react';
import '../../../Common/css/styles.css';

const Python_GetStarted = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন শুরু</h1> <br />
                <div>
                    <div>
                        <h3>পাইথন ইনস্টল করুন</h3>
                        <p>অনেক পিসি এবং ম্যাক-এ পাইথন ইনস্টল করা থাকে।</p>
                        <p>আপনার উইন্ডোজ পিসিতে পাইথন ইনস্টল করা আছে কিনা তা পরীক্ষা করতে, পাইথনের জন্য স্টার্ট বারে অনুসন্ধান করুন বা কমান্ড লাইনে নিম্নলিখিত কমান্ডটি চালান <mark>(cmd.exe)</mark>:</p>
                        <div className='clipboard-terminal'>
                            <pre>C:\Users\Your Name&gt;python --version</pre>
                        </div>
                        <p className='pt-3'>আপনার লিনাক্স বা ম্যাকে পাইথন ইনস্টল করা আছে কিনা তা পরীক্ষা করতে, লিনাক্সে কমান্ড লাইন খুলুন বা ম্যাকে টার্মিনাল খুলুন এবং টাইপ করুনঃ</p>
                        <div className='clipboard-terminal'>
                            <pre>python --version</pre>
                        </div>
                        <p className='pt-3'>আপনি যদি দেখেন যে আপনার কম্পিউটারে পাইথন ইনস্টল করা নেই, তাহলে আপনি নিম্নলিখিত ওয়েবসাইট থেকে বিনামূল্যে ডাউনলোড করতে পারেনঃ <a href="https://www.python.org/">https://www.python.org/</a></p>
                    </div>
                    <div>
                        <h3>পাইথন কুইকস্টার্ট</h3>
                        <p>পাইথন একটি ইন্টারপ্রেটেড প্রোগ্রামিং ল্যাঙ্গুয়েজ, এর মানে হল যে একজন ডেভেলপার হিসেবে আপনি একটি টেক্সট এডিটরে পাইথন (.py) ফাইল লিখবেন এবং তারপর সেই ফাইলগুলিকে পাইথন ইন্টারপ্রেটারে এক্সিকিউট করার জন্য রাখবেন।</p>
                        <p>একটি পাইথন ফাইলকে নিচের কমান্ড লাইনের মতো করে চালাবেনঃ</p>
                        <div className='clipboard-terminal'>
                            <pre>C:\Users\Your Name&gt;python helloworld.py</pre>
                        </div>
                        <p className='pt-3'>যেখানে "helloworld.py" আপনার পাইথন ফাইলের নাম।</p>
                        <p>আসুন আমাদের প্রথম পাইথন ফাইলটি লিখি, যার নাম <mark>helloworld.py</mark>, যেটি যেকোন টেক্সট এডিটরে করা যেতে পারে।</p>
                        <div className='clipboard'>
                            <p>helloworld.py</p>
                            <pre>print("Hello, World!")</pre>
                        </div>
                        <p className='pt-3'>একদম সহজ. আপনার ফাইলটি সেইভ করুন. আপনার কমান্ড লাইন খুলুন, আপনি যে ডিরেক্টরিতে আপনার ফাইল সেইভ করেছেন সেখানে নেভিগেট করুন এবং রান করুনঃ</p>
                        <div className='clipboard-terminal'>
                            <pre>C:\Users\Your Name&gt;python helloworld.py</pre>
                        </div>
                        <p className='pt-3'>আউটপুট পড়তে হবেঃ</p>
                        <div className='clipboard-terminal'>
                            <pre>Hello, World!</pre>
                        </div>
                        <p className='pt-3'>অভিনন্দন, আপনি আপনার প্রথম পাইথন প্রোগ্রামটি লিখেছেন এবং রান করেছেন।</p>
                    </div>
                    <div>
                        <h3>পাইথন কুইকস্টার্ট</h3>
                        <p>পাইথন একটি ইন্টারপ্রেটেড প্রোগ্রামিং ল্যাঙ্গুয়েজ, এর মানে হল যে একজন ডেভেলপার হিসেবে আপনি একটি টেক্সট এডিটরে পাইথন (.py) ফাইল লিখবেন এবং তারপর সেই ফাইলগুলিকে পাইথন ইন্টারপ্রেটারে এক্সিকিউট করার জন্য রাখবেন।</p>
                        <p>একটি পাইথন ফাইলকে নিচের কমান্ড লাইনের মতো করে চালাবেনঃ</p>
                        <div className='clipboard-terminal'>
                            <pre>C:\Users\Your Name&gt;python helloworld.py</pre>
                        </div>
                        <p className='pt-3'>যেখানে "helloworld.py" আপনার পাইথন ফাইলের নাম।</p>
                        <p>আসুন আমাদের প্রথম পাইথন ফাইলটি লিখি, যার নাম <mark>helloworld.py</mark>, যেটি যেকোন টেক্সট এডিটরে করা যেতে পারে।</p>
                        <div className='clipboard'>
                            <p>helloworld.py</p>
                            <pre>print("Hello, World!")</pre>
                        </div>
                        <p className='pt-3'>একদম সহজ. আপনার ফাইলটি সেইভ করুন. আপনার কমান্ড লাইন খুলুন, আপনি যে ডিরেক্টরিতে আপনার ফাইল সেইভ করেছেন সেখানে নেভিগেট করুন এবং রান করুনঃ</p>
                        <div className='clipboard-terminal'>
                            <pre>C:\Users\Your Name&gt;python helloworld.py</pre>
                        </div>
                        <p className='pt-3'>আউটপুট পড়তে হবেঃ</p>
                        <div className='clipboard-terminal'>
                            <pre>Hello, World!</pre>
                        </div>
                        <p className='pt-3'>অভিনন্দন, আপনি আপনার প্রথম পাইথন প্রোগ্রামটি লিখেছেন এবং রান করেছেন।</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Python_GetStarted;