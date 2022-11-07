import React from 'react';
import '../css/styles.css';

const Python_GetStarted = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন শুরু</h1> <br />
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
                    <h3>পাইথন কমান্ড লাইন</h3>
                    <p>পাইথনে স্বল্প পরিমাণ কোড পরীক্ষা করার জন্য কখনও কখনও এটি একটি ফাইলে কোড না লেখা সরাসরি কমান্ড লাইনে লেখা খুবই দ্রুত এবং সহজ। আর এটি সম্ভব হয়েছে কারণ পাইথন নিজেই একটি কমান্ড লাইন হিসাবে চালানো যেতে পারে।</p>
                    <p>উইন্ডোজ, ম্যাক বা লিনাক্স কমান্ড লাইনে নিম্নলিখিত শব্দটি টাইপ করুনঃ</p>
                    <div className='clipboard-terminal'>
                        <pre>C:\Users\Your Name&gt;python</pre>
                    </div>
                    <p className='pt-3'>অথবা যদি "python" কমান্ডটি কাজ না করে, আপনি "py" কমান্ডটি দিয়ে চেষ্টা করতে পারেনঃ</p>
                    <div className='clipboard-terminal'>
                        <pre>C:\Users\Your Name&gt;py</pre>
                    </div>
                    <p className='pt-3'>এখানে আপনি যেকোন পাইথন কোড লিখতে পারেন, যেমনঃ</p>
                    <div className='clipboard-terminal'>
                        <pre>
                            <span style={{color: '#757575'}}>Python 3.10.6 (main, Aug 12 2022, 18:00:29)  [GCC 12.1.0 64 bit (AMD64)] on win32 <br />
                            Type "help", "copyright", "credits" or "license" for more information.</span> <br />
                            &gt;&gt;&gt; print('Hello World!')
                        </pre>
                    </div>
                    <p className='pt-3'>কমান্ড লাইনে "Hello World!" লেখাটি প্রিন্ট করবেঃ</p>
                    <div className='clipboard-terminal'>
                        <pre>
                            <span style={{color: '#757575'}}>Python 3.10.6 (main, Aug 12 2022, 18:00:29)  [GCC 12.1.0 64 bit (AMD64)] on win32 <br />
                            Type "help", "copyright", "credits" or "license" for more information. <br />
                            &gt;&gt;&gt; print('Hello World!')</span> <br />
                            Hello World!
                        </pre>
                    </div>
                    <p className='pt-3'>আপনার পাইথন কমান্ড লাইনের কাজ শেষ হলে, আপনি পাইথন কমান্ড লাইনের ইন্টারফেস থেকে প্রস্থান করতে নিম্নলিখিত কমান্ডটি টাইপ করতে পারেনঃ</p>
                    <div className='clipboard-terminal'>
                        <pre>exit()</pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Python_GetStarted;