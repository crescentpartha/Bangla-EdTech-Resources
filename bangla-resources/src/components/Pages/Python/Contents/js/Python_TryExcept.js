import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `try:
  print(x)
except:
  print("An exception occurred")`;

const code2 = `print(x)`;

const code3 = `try:
  print(x)
except NameError:
  print("Variable x is not defined")
except:
  print("Something else went wrong")`;

const code4 = `try:
  print("Hello")
except:
  print("Something went wrong")
else:
  print("Nothing went wrong")`;

const code5 = `try:
  print(x)
except:
  print("Something went wrong")
finally:
  print("The 'try except' is finished")`;

const code6 = `try:
  f = open("demofile.txt")
try:
  f.write("Lorum Ipsum")
except:
  print("Something went wrong when writing to the file")
finally:
  f.close()
except:
  print("Something went wrong when opening the file")`;

const Python_TryExcept = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন ট্রাই এক্সসেপ্ট</h1> <br />
                <div>
                    <div>
                        <p><mark>try</mark> ব্লক আপনাকে এররের জন্য কোডের একটি ব্লক পরীক্ষা করতে দেয়।</p>
                        <p><mark>except</mark> ব্লক আপনাকে এরর পরিচালনা করতে দেয়।</p>
                        <p><mark>else</mark> ব্লক আপনাকে কোড এক্সেকিউট করতে দেয় যখন কোন এরর থাকে না।</p>
                        <p><mark>finally</mark> ব্লক আপনাকে কোড এক্সেকিউট করতে দেয়, <mark>try</mark> ব্লক এবং <mark>execute</mark> ব্লক নির্বিশেষে।</p>
                        <h3 className="mt-3">এক্সেপশন হ্যান্ডলিং</h3>
                        <p>যখন একটি এরর ঘটে, বা আমরা এটিকে এক্সেপশন বলি, পাইথন সাধারণত থামবে এবং একটি এরর মেসেজ তৈরি করবে।</p>
                        <p>এই এক্সেপশনগুলি <code>try</code> স্টেটমেন্ট ব্যবহার করে হ্যান্ডেল করা যেতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p><code>try</code> ব্লক একটি এক্সেপশন তৈরি করবে, কারণ <code>x</code> ডিফাইন করা হয়নি।</p>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <p className='mt-3'>যেহেতু <code>try</code> ব্লক একটি এরর উত্থাপন করে, তাই <code>except</code> ব্লকটি কার্যকর করা হবে।</p>
                        <p><code>try</code> ব্লক ছাড়া, প্রোগ্রাম ক্র্যাশ হবে এবং একটি এরর বাড়াবে।</p>
                        <div className='clipboard-error'>
                            <h4>উদাহরণঃ</h4>
                            <p>এই স্টেটমেন্টটি একটি এরর উত্থাপন করবে, কারণ <code>x</code> সংজ্ঞায়িত করা হয়নি।</p>
                            <Code language='python' code={code2}></Code>
                        </div>
                        <h3 className="mt-3">অনেক এক্সসেপশন্স</h3>
                        <p>আপনি যতগুলি চান এক্সেপশন ব্লক ডিফাইন করতে পারেন, যেমন যদি আপনি একটি বিশেষ ধরনের এররের জন্য কোডের একটি বিশেষ ব্লক চালাতে চান।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code3}></Code>
                        </div>
                        <h3 className="mt-3">এল্স বা Else</h3>
                        <p>যদি কোন ত্রুটি উত্থাপিত না হয় তাহলে এক্সিকিউট করার জন্য কোডের একটি ব্লক সংজ্ঞায়িত করতে আপনি <code>else</code> কীওয়ার্ড ব্যবহার করতে পারেন।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code4}></Code>
                        </div>
                        <h3 className="mt-3">ফাইনালি বা Finally</h3>
                        <p><code>finally</code> ব্লক, যদি নির্দিষ্ট করা থাকে, তা নির্বিশেষে কার্যকর করা হবে যদি <code>try</code> ব্লক একটি ত্রুটি উত্থাপন করে বা না করে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code5}></Code>
                        </div>
                        <p className='mt-3'>এটি অব্জেক্টসগুলি বন্ধ করতে এবং রিসোর্সেসগুলি পরিষ্কার করতে কার্যকর হতে পারে।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code6}></Code>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="try-except"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="try-except"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_TryExcept;