import React from 'react';
import '../../../Common/css/styles.css';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code = `#include <stdio.h>
int main() {
    printf("Hello World!");
    return 0;
}`;

const C_Syntax = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>সি সিনট্যাক্স</h1> <br />
                <div>
                    <div>
                        <h3 className='pb-2'>সিনট্যাক্স</h3>
                        <p>আপনি ইতিমধ্যেই কয়েকবার নিম্নলিখিত কোডটি দেখেছেন। আসুন এটি আরও ভালভাবে বোঝার জন্য ভেঙে ভেঙে দেখা যাকঃ</p>
                        <div className='clipboard'>
                            <h5>উদাহরণঃ</h5>
                            <Code language='c' code={code}></Code>
                        </div>
                    </div>
                    <div>
                        <h3 className='pt-4 pb-2'>উদাহরণ ব্যাখ্যাঃ</h3>
                        <p><b>লাইন ১ঃ</b> <code>#include &lt;stdio.h&gt;</code> একটি হেডার ফাইল লাইব্রেরি যা আমাদের ইনপুট এবং আউটপুট ফাংশনগুলির সাথে কাজ করতে দেয়, যেমন <mark>printf()</mark> (লাইন 4 এ ব্যবহৃত)। হেডার ফাইলগুলি সি প্রোগ্রামে ফাংশনালিটি যোগ করে।</p>
                        <p><b>লাইন ২ঃ</b> একটি ফাঁকা লাইন। সি <mark>সাদা স্থান</mark> বা <mark>ওয়াইট স্পেস</mark> উপেক্ষা করে। কিন্তু আমরা কোডটিকে আরও পঠনযোগ্য করতে এটি ব্যবহার করি।</p>
                        <p><b>লাইন ৩ঃ</b> আরেকটি জিনিস যা সবসময় একটি সি প্রোগ্রামে উপস্থিত থাকে, তা হল <code>main()</code>। একে ফাংশন বলা হয়। এর ২য় বন্ধনীর <mark><code>`{'{}'}`</code></mark> মধ্যে যেকোন কোড থাকলে তা কার্যকর করা হবে।</p>
                        <p><b>লাইন ৪ঃ</b> <code>printf()</code> একটি ফাংশন যা স্ক্রিনে আউটপুট দেখাতে ব্যবহৃত হয়। আমাদের এই উদাহরণে "Hello World!" আউটপুটটি দেখাতে <code>printf()</code> ফাংশনটি ব্যবহার করা হয়েছে।</p>
                        <p><b>লাইন ৫ঃ</b> <code>return 0;</code> দ্বারা <code>main()</code> ফাংশনটি শেষ হয়েছে বুঝায় বা ফাংশনটিকে শেষ করে।</p>
                        <p><b>লাইন ৬ঃ</b> মূল ফাংশনটি শেষ করতে ক্লোজিং ব্রাকেটটি <mark><code>`{'{}'}`</code></mark> যোগ করতে ভুলবেন না।</p>
                    </div>
                    <div>
                        <h3 className='pb-2'>নোটঃ</h3>
                        <ul>
                            <li>প্রতিটি সি স্টেটমেন্ট একটি সেমিকোলন <mark><code>;</code></mark> দিয়ে শেষ হয়।</li>
                            <li>কম্পাইলার ওয়াইট স্পেস উপেক্ষা করে। একাধিক লাইনের ব্যবহার কোডটিকে আরও পঠনযোগ্য করে তোলে। তবে, একলাইনে কোড লেখলেও কাজ করবে, যেমনঃ <code>{code}</code></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default C_Syntax;