import React from 'react';
import { Table } from 'react-bootstrap';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `print(10 + 5)`;

const Python_Operators = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন অপারেটর</h1> <br />
                <div>
                    <div>
                        <p>অপারেটরগুলি ভেরিয়েবল এবং মানগুলির উপর ক্রিয়াকলাপ সম্পাদন করতে ব্যবহৃত হয়।</p>
                        <p>নীচের উদাহরণে, আমরা দুটি মান একসাথে যোগ করতে <mark>+</mark> অপারেটর ব্যবহার করেছি।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <p className='mt-3'>পাইথন অপারেটরদের নিম্নলিখিত গ্রুপে বিভক্ত করে।</p>
                        <ul>
                            <li>এরিথমেটিক অপারেটর</li>
                            <li>অ্যাসাইনমেন্ট অপারেটর</li>
                            <li>কোম্পারিসন অপারেটর</li>
                            <li>লজিক্যাল অপারেটর</li>
                            <li>আইডেন্টিটি অপারেটর</li>
                            <li>মেম্বারশিপ অপারেটর</li>
                            <li>বিটওয়াইজ অপারেটর</li>
                        </ul>

                        <h3>পাইথন এরিথমেটিক অপারেটরস</h3>
                        <p>গাণিতিক অপারেটরগুলি সাধারণ গাণিতিক ক্রিয়াকলাপগুলি সম্পাদন করতে সংখ্যাসূচক মান সহ ব্যবহৃত হয়।</p>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>অপারেটর</th>
                                    <th>নাম</th>
                                    <th>উদাহরণ</th>
                                </tr>
                            </thead>
                            <tbody className='text-primary'>
                                <tr>
                                    <td><code className='text-dark'>+</code></td>
                                    <td><code className='text-dark'>অ্যাডিশন</code></td>
                                    <td><code className='text-dark'>x + y</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>-</code></td>
                                    <td><code className='text-dark'>সাবট্রাকশন</code></td>
                                    <td><code className='text-dark'>x - y</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>*</code></td>
                                    <td><code className='text-dark'>মাল্টিপ্লিকেশন</code></td>
                                    <td><code className='text-dark'>x * y</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>/</code></td>
                                    <td><code className='text-dark'>ডিভিশন</code></td>
                                    <td><code className='text-dark'>x / y</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>%</code></td>
                                    <td><code className='text-dark'>মডুলাস</code></td>
                                    <td><code className='text-dark'>x % y</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>**</code></td>
                                    <td><code className='text-dark'>এক্সপোনেনসিয়েশান</code></td>
                                    <td><code className='text-dark'>x ** y</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>//</code></td>
                                    <td><code className='text-dark'>ফ্লোর ডিভিশন</code></td>
                                    <td><code className='text-dark'>x // y</code></td>
                                </tr>
                            </tbody>
                        </Table>

                        <h3>পাইথন এসাইনমেন্ট অপারেটরস</h3>
                        <p>অ্যাসাইনমেন্ট অপারেটরগুলি ভেরিয়েবলের মান নির্ধারণ করতে ব্যবহৃত হয়।</p>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>অপারেটর</th>
                                    <th>উদাহরণ</th>
                                    <th>একইভাবে</th>
                                </tr>
                            </thead>
                            <tbody className='text-primary'>
                                <tr>
                                    <td><code className='text-dark'>=</code></td>
                                    <td><code className='text-dark'>x = 5</code></td>
                                    <td><code className='text-dark'>x = 5</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>+=</code></td>
                                    <td><code className='text-dark'>x += 3</code></td>
                                    <td><code className='text-dark'>x = x + 3</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>-=</code></td>
                                    <td><code className='text-dark'>x -= 3</code></td>
                                    <td><code className='text-dark'>x = x - 3</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>*=</code></td>
                                    <td><code className='text-dark'>x *= 3</code></td>
                                    <td><code className='text-dark'>x = x * 3</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>/=</code></td>
                                    <td><code className='text-dark'>x /= 3</code></td>
                                    <td><code className='text-dark'>x = x / 3</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>%=</code></td>
                                    <td><code className='text-dark'>x %= 3</code></td>
                                    <td><code className='text-dark'>x = x % 3</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>//=</code></td>
                                    <td><code className='text-dark'>x //= 3</code></td>
                                    <td><code className='text-dark'>x = x // 3</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>**=</code></td>
                                    <td><code className='text-dark'>x **= 3</code></td>
                                    <td><code className='text-dark'>x = x ** 3</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>&=</code></td>
                                    <td><code className='text-dark'>x &= 3</code></td>
                                    <td><code className='text-dark'>x = x & 3</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>|=</code></td>
                                    <td><code className='text-dark'>x |= 3</code></td>
                                    <td><code className='text-dark'>x = x | 3</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>^=</code></td>
                                    <td><code className='text-dark'>x ^= 3</code></td>
                                    <td><code className='text-dark'>x = x ^ 3</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>&gt;&gt;=</code></td>
                                    <td><code className='text-dark'>x &gt;&gt;= 3</code></td>
                                    <td><code className='text-dark'>x = x &gt;&gt; 3</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>&lt;&lt;=</code></td>
                                    <td><code className='text-dark'>x &lt;&lt;= 3</code></td>
                                    <td><code className='text-dark'>x = x &lt;&lt; 3</code></td>
                                </tr>
                            </tbody>
                        </Table>

                        <h3>পাইথন কোম্পারিসন অপারেটরস</h3>
                        <p>কোম্পারিসন অপারেটর দুটি মান তুলনা করতে ব্যবহৃত হয়।</p>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>অপারেটর</th>
                                    <th>বর্ণনা</th>
                                    <th>উদাহরণ</th>
                                </tr>
                            </thead>
                            <tbody className='text-primary'>
                                <tr>
                                    <td><code className='text-dark'>==</code></td>
                                    <td><code className='text-dark'>সমান</code></td>
                                    <td><code className='text-dark'>x == y</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>!=</code></td>
                                    <td><code className='text-dark'>সমান নয়</code></td>
                                    <td><code className='text-dark'>x != y</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>&gt;</code></td>
                                    <td><code className='text-dark'>অপেক্ষা বৃহত্তর</code></td>
                                    <td><code className='text-dark'>x &gt; y</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>&lt;</code></td>
                                    <td><code className='text-dark'>অপেক্ষা ক্ষুদ্রতম</code></td>
                                    <td><code className='text-dark'>x &lt; y</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>&gt;=</code></td>
                                    <td><code className='text-dark'>এর চেয়ে বড় বা সমান</code></td>
                                    <td><code className='text-dark'>x &gt;= y</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>&lt;=</code></td>
                                    <td><code className='text-dark'>এর চেয়ে ছোট বা সমান</code></td>
                                    <td><code className='text-dark'>x &lt;= y</code></td>
                                </tr>
                            </tbody>
                        </Table>

                        <h3>পাইথন লজিকাল অপারেটরস</h3>
                        <p>শর্তযুক্ত বিবৃতি একত্রিত করতে লজিক্যাল অপারেটর ব্যবহার করা হয়।</p>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>অপারেটর</th>
                                    <th>বর্ণনা</th>
                                    <th>উদাহরণ</th>
                                </tr>
                            </thead>
                            <tbody className='text-primary'>
                                <tr>
                                    <td><code className='text-dark'>and</code></td>
                                    <td><code className='text-dark'>উভয় বিবৃতি সত্য হলে সত্য প্রদান করে</code></td>
                                    <td><code className='text-dark'>x &lt; 5 and  x &lt; 10</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>or</code></td>
                                    <td><code className='text-dark'>বিবৃতিগুলির একটি সত্য হলে সত্য প্রদান করে</code></td>
                                    <td><code className='text-dark'>x &lt; 5 or x &lt; 4</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>not</code></td>
                                    <td><code className='text-dark'>ফলাফল বিপরীত, ফলাফল সত্য হলে মিথ্যা প্রদান করে</code></td>
                                    <td><code className='text-dark'>not(x &lt; 5 and x &lt; 10)</code></td>
                                </tr>
                            </tbody>
                        </Table>

                        <h3>পাইথন আইডেন্টিটি অপারেটরস</h3>
                        <p>আইডেন্টিটি অপারেটরগুলি বস্তুর তুলনা করার জন্য ব্যবহার করা হয়, যদি তারা সমান হয় না, তবে যদি তারা আসলে একই বস্তু হয়, একই মেমরি অবস্থান সহ।</p>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>অপারেটর</th>
                                    <th>বর্ণনা</th>
                                    <th>উদাহরণ</th>
                                </tr>
                            </thead>
                            <tbody className='text-primary'>
                                <tr>
                                    <td><code className='text-dark'>is</code></td>
                                    <td><code className='text-dark'>উভয় ভেরিয়েবল একই বস্তু হলে <mark>True</mark> প্রদান করে</code></td>
                                    <td><code className='text-dark'>x is y</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>is not</code></td>
                                    <td><code className='text-dark'>উভয় ভেরিয়েবল একই বস্তু না হলে <mark>True</mark> প্রদান করে</code></td>
                                    <td><code className='text-dark'>x is not y</code></td>
                                </tr>
                            </tbody>
                        </Table>

                        <h3>পাইথন মেম্বারশিপ অপারেটরস</h3>
                        <p>মেম্বারশিপ অপারেটরগুলি একটি বস্তুতে একটি ক্রম উপস্থাপন করা হয়েছে কিনা তা পরীক্ষা করতে ব্যবহৃত হয়।</p>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>অপারেটর</th>
                                    <th>বর্ণনা</th>
                                    <th>উদাহরণ</th>
                                </tr>
                            </thead>
                            <tbody className='text-primary'>
                                <tr>
                                    <td><code className='text-dark'>in</code></td>
                                    <td><code className='text-dark'>বস্তুতে নির্দিষ্ট মান সহ একটি ক্রম উপস্থিত থাকলে <mark>True</mark> প্রদান করে</code></td>
                                    <td><code className='text-dark'>x in y</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>not in</code></td>
                                    <td><code className='text-dark'>বস্তুতে নির্দিষ্ট মান সহ একটি ক্রম উপস্থিত না থাকলে <mark>True</mark> প্রদান করে</code></td>
                                    <td><code className='text-dark'>x not in y</code></td>
                                </tr>
                            </tbody>
                        </Table>

                        <h3>পাইথন বিটওয়াইজ অপারেটরস</h3>
                        <p>বিটওয়াইজ অপারেটরগুলি (বাইনারী) সংখ্যা তুলনা করতে ব্যবহৃত হয়।</p>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>অপারেটর</th>
                                    <th>নাম</th>
                                    <th>বর্ণনা</th>
                                </tr>
                            </thead>
                            <tbody className='text-primary'>
                                <tr>
                                    <td><code className='text-dark'>&</code></td>
                                    <td><code className='text-dark'>AND</code></td>
                                    <td><code className='text-dark'>প্রতিটি বিট 1 এ সেট করে যদি উভয় বিট 1 হয়।</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>|</code></td>
                                    <td><code className='text-dark'>OR</code></td>
                                    <td><code className='text-dark'>প্রতিটি বিটকে 1 এ সেট করে যদি দুটি বিটের একটি 1 হয়।</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>^</code></td>
                                    <td><code className='text-dark'>XOR</code></td>
                                    <td><code className='text-dark'>প্রতিটি বিটকে 1 এ সেট করে যদি দুটি বিটের মধ্যে শুধুমাত্র একটি 1 হয়।</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>~</code></td>
                                    <td><code className='text-dark'>NOT</code></td>
                                    <td><code className='text-dark'>সমস্ত বিট উল্টে দেয়।</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>&lt;&lt;</code></td>
                                    <td><code className='text-dark'>Zero fill left shift</code></td>
                                    <td><code className='text-dark'>ডান থেকে শূন্য ঠেলে বামে সরান এবং বামদিকের বিটগুলি পড়ে যেতে দিন।</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>&gt;&gt;</code></td>
                                    <td><code className='text-dark'>Signed right shift</code></td>
                                    <td><code className='text-dark'>বাম দিক থেকে বামদিকের বিটের কপিগুলিকে ঠেলে ডানদিকে সরান এবং ডানদিকের বিটগুলি পড়ে যেতে দিন।</code></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="operators"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="operators"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_Operators;