import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `price = 49
txt = "The price is {} dollars"
print(txt.format(price))`;

const code2 = `txt = "The price is {:.2f} dollars"`;

const code3 = `print(txt.format(price, itemno, count))`;

const code4 = `quantity = 3
itemno = 567
price = 49
myorder = "I want {} pieces of item number {} for {:.2f} dollars."
print(myorder.format(quantity, itemno, price))`;

const code5 = `quantity = 3
itemno = 567
price = 49
myorder = "I want {0} pieces of item number {1} for {2:.2f} dollars."
print(myorder.format(quantity, itemno, price))`;

const code6 = `age = 36
name = "John"
txt = "His name is {1}. {1} is {0} years old."
print(txt.format(age, name))`;

const code7 = `myorder = "I have a {carname}, it is a {model}."
print(myorder.format(carname = "Ford", model = "Mustang"))`;

const Python_StringFormatting = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন স্ট্রিংস ফর্মেটিংস</h1> <br />
                <div>
                    <div>
                        <p>একটি স্ট্রিং প্রত্যাশিতভাবে প্রদর্শিত হবে তা নিশ্চিত করতে, আমরা ফলাফলটি <mark>format()</mark> মেথড দিয়ে ফর্ম্যাট করতে পারি।</p>
                        <h3>স্ট্রিং format()</h3>
                        <p><mark>format()</mark> মেথড আপনাকে একটি স্ট্রিংয়ের নির্বাচিত অংশগুলিকে বিন্যাস করতে দেয়।</p>
                        <p>কখনও কখনও এমন একটি পাঠ্যের কিছু অংশ রয়েছে যা আপনি নিয়ন্ত্রণ করেন না, সম্ভবত সেগুলি ডাটাবেস বা ব্যবহারকারীর ইনপুট থেকে আসে?</p>
                        <p>এই ধরনের মান নিয়ন্ত্রণ করতে, পাঠ্যের মধ্যে প্লেসহোল্ডারস (কারলি ব্রাকেটস {}) যোগ করুন এবং <mark>format()</mark> মেথডের মাধ্যমে মানগুলি রান করুন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>একটি প্লেসহোল্ডারস যোগ করুন যেখানে আপনি মূল্য প্রদর্শন করতে চানঃ</p>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <p className='mt-3'>মানটি কীভাবে রূপান্তর করবেন তা নির্দিষ্ট করতে আপনি কারলি ব্রাকেটের ভিতরে প্যারামিটার যুক্ত করতে পারেনঃ</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>মূল্য এমনভাবে ফরম্যাট করুন যেন দুটি দশমিক সহ একটি সংখ্যা হিসাবে প্রদর্শিত হয়ঃ</p>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <h3 className="mt-3">একাধিক মান</h3>
                        <p>আপনি যদি আরও মান ব্যবহার করতে চান তবে <mark>format()</mark> মেথডে আরও মান যুক্ত করুন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code3}></Code>
                        </div>
                        <p className='mt-3'>এবং আরো প্লেসহোল্ডার যোগ করুন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code4}></Code>
                        </div>
                        <h3 className="mt-3">ইনডেক্স নাম্বারস</h3>
                        <p>মানগুলি সঠিক স্প্লেসহোল্ডারগুলিতে স্থাপন করা হয়েছে তা নিশ্চিত করতে আপনি ইনডেক্স সংখ্যা (কারলি ব্রাকেট <code>&#123;0&#125;</code> এর মধ্যে একটি সংখ্যা) ব্যবহার করতে পারেন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code5}></Code>
                        </div>
                        <p className="mt-3">এছাড়াও, আপনি যদি একই মান একাধিকবার উল্লেখ করতে চান, তাহলে ইনডেক্স নম্বর ব্যবহার করুন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code6}></Code>
                        </div>
                        <h3 className="mt-3">নেমড ইন্ডেক্সেস</h3>
                        <p>এছাড়াও আপনি কারলি ব্রাকেট এর ভিতরে একটি নাম লিখে নামযুক্ত সূচী ব্যবহার করতে পারেন যেমন <code>&#123;carname&#125;</code>, কিন্তু তারপরে আপনি যখন প্যারামিটারে মান পাস করবেন তখন আপনাকে অবশ্যই নাম ব্যবহার করতে হবে যেমন <code>txt.format(carname = "Ford")</code></p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code7}></Code>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="string-formatting"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="string-formatting"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_StringFormatting;