import React from 'react';
import { Table } from 'react-bootstrap';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `x = 5
print(type(x))`;

const Python_DataTypes = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন ডাটা টাইপ্স</h1> <br />
                <div>
                    <div>
                        <h3>বিল্ট-ইন ডেটা টাইপ্স</h3>
                        <p>প্রোগ্রামিং-এ, ডেটা টাইপ একটি গুরুত্বপূর্ণ ধারণা। ভেরিয়েবল বিভিন্ন ধরনের তথ্য সংরক্ষণ করতে পারে, এবং বিভিন্ন টাইপ্স বিভিন্ন জিনিস করতে পারে।</p>
                        <p>পাইথনে নিম্নলিখিত ডেটা টাইপ্সগুলি বিল্ট-ইন রয়েছেঃ</p>

                        <Table striped bordered hover responsive>
                            <tbody>
                                <tr>
                                    <td className='fw-semibold'>Text Type:</td>
                                    <td><mark>str</mark></td>
                                </tr>
                                <tr>
                                    <td className='fw-semibold'>Numeric Types:</td>
                                    <td><mark>int</mark>, <mark>float</mark>, <mark>complex</mark></td>
                                </tr>
                                <tr>
                                    <td className='fw-semibold'>Sequence Types:</td>
                                    <td><mark>list</mark>, <mark>tuple</mark>, <mark>range</mark></td>
                                </tr>
                                <tr>
                                    <td className='fw-semibold'>Mapping Type:</td>
                                    <td><mark>dict</mark></td>
                                </tr>
                                <tr>
                                    <td className='fw-semibold'>Set Types:</td>
                                    <td><mark>set</mark>, <mark>frozenset</mark></td>
                                </tr>
                                <tr>
                                    <td className='fw-semibold'>Boolean Type:</td>
                                    <td><mark>bool</mark></td>
                                </tr>
                                <tr>
                                    <td className='fw-semibold'>Binary Types:</td>
                                    <td><mark>bytes</mark>, <mark>bytearray</mark>, <mark>memoryview</mark></td>
                                </tr>
                                <tr>
                                    <td className='fw-semibold'>None Type:</td>
                                    <td><mark>NoneType</mark></td>
                                </tr>
                            </tbody>
                        </Table>

                        <h3>কিভাবে ডেটা টাইপ সম্পর্কে জানতে পারেনঃ</h3>
                        <p>আপনি <mark>type()</mark> ফাংশন ব্যবহার করে যেকোনো অবজেক্টের ডাটা টাইপ পেতে পারেনঃ</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>ভেরিয়েবল x এর ডাটা টাইপ প্রিন্ট করবে।</p>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <h3 className='mt-3'>ডেটা টাইপ সেট করা</h3>
                        <p>পাইথনে, যখন আপনি একটি ভেরিয়েবলের মান নির্ধারণ করেন তখন ডেটা টাইপ সেট করা হয়ঃ</p>

                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>উদাহরণ</th>
                                    <th>ডেটা টাইপ</th>
                                </tr>
                            </thead>
                            <tbody className='text-primary'>
                                <tr>
                                    <td><code className='text-dark'>x = "Hello World"</code></td>
                                    <td><code className='text-dark'>str</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>x = 20</code></td>
                                    <td><code className='text-dark'>int</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>x = 20.5</code></td>
                                    <td><code className='text-dark'>float</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>x = 1j</code></td>
                                    <td><code className='text-dark'>complex</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>x = ["apple", "banana", "cherry"]</code></td>
                                    <td><code className='text-dark'>list</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>x = ("apple", "banana", "cherry")</code></td>
                                    <td><code className='text-dark'>tuple</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>x = range(6)</code></td>
                                    <td><code className='text-dark'>range</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>x = &#123;"name" : "John", "age" : 36&#125;</code></td>
                                    <td><code className='text-dark'>dict</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>x = &#123;"apple", "banana", "cherry"&#125;</code></td>
                                    <td><code className='text-dark'>set</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>x = frozenset(&#123;"apple", "banana", "cherry"&#125;)</code></td>
                                    <td><code className='text-dark'>frozenset</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>x = True</code></td>
                                    <td><code className='text-dark'>bool</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>x = b"Hello"</code></td>
                                    <td><code className='text-dark'>bytes</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>x = bytearray(5)</code></td>
                                    <td><code className='text-dark'>bytearray</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>x = memoryview(bytes(5))</code></td>
                                    <td><code className='text-dark'>memoryview</code></td>
                                </tr>
                                <tr>
                                    <td><code className='text-dark'>x = None</code></td>
                                    <td><code className='text-dark'>NoneType</code></td>
                                </tr>
                            </tbody>
                        </Table>

                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="datatypes"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="datatypes"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_DataTypes;