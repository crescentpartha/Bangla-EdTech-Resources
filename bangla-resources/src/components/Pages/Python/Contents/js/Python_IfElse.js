import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `a = 33
b = 200
if b > a:
  print("b is greater than a")`;

const code2 = `a = 33
b = 200
if b > a:
print("b is greater than a") # you will get an error`;

const code3 = `a = 33
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")`;

const code4 = `a = 200
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
else:
  print("a is greater than b")`;

const code5 = `a = 200
b = 33
if b > a:
  print("b is greater than a")
else:
  print("b is not greater than a")`;

const code6 = `if a > b: print("a is greater than b")`;

const code7 = `a = 2
b = 330
print("A") if a > b else print("B")`;

const code8 = `a = 330
b = 330
print("A") if a > b else print("=") if a == b else print("B")`;

const code9 = `a = 200
b = 33
c = 500
if a > b and c > a:
  print("Both conditions are True")`;

const code10 = `a = 200
b = 33
c = 500
if a > b or a > c:
  print("At least one of the conditions is True")`;

const code11 = `x = 41

if x > 10:
  print("Above ten,")
  if x > 20:
    print("and also above 20!")
  else:
    print("but not above 20.")`;

const code12 = `a = 33
b = 200

if b > a:
  pass`;

const Python_IfElse = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন ইফ এল্স</h1> <br />
                <div>
                    <div>
                        <h3>পাইথন কন্ডিশনস এন্ড ইফ স্টেটমেন্টস</h3>
                        <p>পাইথন গণিত থেকে স্বাভাবিক লজিক্যাল শর্ত সমর্থন করে।</p>
                        <ul>
                            <li className='mb-2'>সমানঃ <mark><code>a == b</code></mark></li>
                            <li className='mb-2'>সমান নয়ঃ <mark><code>a != b</code></mark></li>
                            <li className='mb-2'>এর চেয়ে কমঃ <mark><code>a &lt; b</code></mark></li>
                            <li className='mb-2'>এর চেয়ে কম বা সমানঃ <mark><code>a &lt;= b</code></mark></li>
                            <li className='mb-2'>এর চেয়ে বড়ঃ <mark><code>a &gt; b</code></mark></li>
                            <li className='mb-2'>এর থেকে বড় বা সমানঃ <mark><code>a &gt;= b</code></mark></li>
                        </ul>
                        <p>এই শর্তগুলি বিভিন্ন উপায়ে ব্যবহার করা যেতে পারে, সাধারণত "ইফ স্টেটমেন্ট" এবং লুপগুলিতে।</p>
                        <p><mark><code>if</code></mark> কীওয়ার্ড ব্যবহার করে একটি "if statement" লেখা হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>ইফ স্টেটমেন্টঃ</p>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <h3 className="mt-3">ইন্ডেন্টেশন</h3>
                        <p>কোডের স্কোপ নির্ধারণ করতে পাইথন ইন্ডেন্টেশনের উপর নির্ভর করে (একটি লাইনের শুরুতে সাদা স্থান)। অন্যান্য প্রোগ্রামিং ভাষা প্রায়ই এই উদ্দেশ্যে কার্লি ব্রাকেট ব্যবহার করে।</p>
                        <div className='clipboard-error'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <h3 className="mt-3">এলিফ বা Elif</h3>
                        <p>Elif কীওয়ার্ড হল পাইথনের বলার উপায় "যদি আগের শর্তগুলি সত্য না হয় তবে এই শর্তটি চেষ্টা করুন"।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code3}></Code>
                        </div>
                        <h3 className="mt-3">Else বা এল্স</h3>
                        <p>Else বা এল্স কীওয়ার্ডটি এমন কিছু ধরে ফেলে যা পূর্ববর্তী শর্তগুলির দ্বারা ধরা পড়ে না।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code4}></Code>
                        </div>
                        <p className='mt-3'>Elif ছাড়াও else থাকতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code5}></Code>
                        </div>
                        <h3 className="mt-3">শর্ট হ্যান্ড ইফ</h3>
                        <p>আপনার যদি এক্সিকিউট করার জন্য শুধুমাত্র একটি স্টেটমেন্ট থাকে, তাহলে আপনি এটিকে if স্টেটমেন্টের মতো একই লাইনে রাখতে পারেন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code6}></Code>
                        </div>
                        <h3 className="mt-3">শর্ট হ্যান্ড ইফ ... এল্স</h3>
                        <p>আপনার যদি চালানোর জন্য শুধুমাত্র একটি বিবৃতি থাকে, একটি if এর জন্য এবং একটি অন্যটির জন্য, আপনি এটি সব একই লাইনে রাখতে পারেন:</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code7}></Code>
                        </div>
                        <p className='mt-3'>একই লাইনে আপনার একাধিক বিবৃতি থাকতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code8}></Code>
                        </div>
                        <h3 className="mt-3">এন্ড</h3>
                        <p>এন্ড কীওয়ার্ড একটি লজিক্যাল অপারেটর, এবং শর্তসাপেক্ষ বিবৃতি একত্রিত করতে ব্যবহৃত হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>পরীক্ষা করুন, a b এর থেকে বড় হয় এবং c a এর থেকে বড় হয়ঃ</p>
                            <Code language='python' code={code9}></Code>
                        </div>
                        <h3 className="mt-3">অর</h3>
                        <p>অর কীওয়ার্ড একটি লজিক্যাল অপারেটর, এবং শর্তসাপেক্ষ বিবৃতি একত্রিত করতে ব্যবহৃত হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>পরীক্ষা করুন, যদি a b এর থেকে বড় হয়, অথবা a যদি c এর থেকে বড় হয়ঃ</p>
                            <Code language='python' code={code10}></Code>
                        </div>
                        <h3 className="mt-3">নেস্টেড ইফ স্টেটমেন্ট</h3>
                        <p>যদি এক স্টেটমেন্টের ভিতরে আর-এক if স্টেটমেন্ট থাকে তবে তাকে নেস্টেড ইফ স্টেটমেন্ট বলে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code11}></Code>
                        </div>
                        <h3 className="mt-3">পাস স্টেটমেন্টে</h3>
                        <p>পাস স্টেটমেন্টে কোন কন্ডিশন বা ত্রুটি এড়াতে ব্যবহৃত হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code12}></Code>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="if-else"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="if-else"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_IfElse;