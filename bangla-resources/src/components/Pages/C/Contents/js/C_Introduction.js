import React from 'react';
import '../../../Common/css/styles.css';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';
import CommentInput from '../../../Common/Shared/CommentInput';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';

const code = `printf("Hello, World!");`;

const C_Introduction = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>ভূমিকা</h1> <br />
                <div>
                    <div>
                        <h3>সি কি?</h3>
                        <ul>
                            <li>সি হল একটি সাধারণ প্রোগ্রামিং ভাষা যা <mark>1972</mark> সালে <b>বেল ল্যাবরেটরিতে</b> <mark>ডেনিস রিচি</mark> তৈরি করেছিলেন।</li>
                            <li>পুরানো হওয়া সত্ত্বেও এটি একটি খুব জনপ্রিয় ভাষা।</li>
                            <li>সি দৃঢ়ভাবে ইউনিক্সের সাথে যুক্ত, কারণ এটি ইউনিক্স অপারেটিং সিস্টেম লেখার জন্য তৈরি করা হয়েছিল।</li>
                        </ul>
                    </div>
                    <div>
                        <h3>কেন সি শিখবেন?</h3>
                        <ul>
                            <li>এটি বিশ্বের সবচেয়ে জনপ্রিয় প্রোগ্রামিং ভাষাগুলির মধ্যে একটি।</li>
                            <li>আপনি যদি সি জানেন তবে অন্যান্য জনপ্রিয় প্রোগ্রামিং ভাষা যেমন জাভা, পাইথন, সি++, সি#, ইত্যাদি শিখতে আপনার কোন সমস্যা হবে না, কারণ সিনট্যাক্স একই রকম।</li>
                            <li>জাভা এবং পাইথনের মতো অন্যান্য প্রোগ্রামিং ভাষার তুলনায় সি খুব দ্রুত কাজ করে।</li>
                            <li>সি একটি বহুমুখী প্রোগ্রামিং ভাষা; এটি অ্যাপ্লিকেশন এবং প্রযুক্তি উভয় ক্ষেত্রেই ব্যবহার করা যেতে পারে।</li>
                        </ul>
                    </div>
                    <div>
                        <h3>সি এবং সি++ এর মধ্যে পার্থক্য</h3>
                        <ul>
                            <li>সি++ সি এর একটি এক্সটেনশন হিসাবে বিকশিত হয়েছিল এবং উভয় ভাষাতেই প্রায় একই সিনট্যাক্স রয়েছে।</li>
                            <li>সি এবং সি++ এর মধ্যে প্রধান পার্থক্য হল সি++ ক্লাস এবং অবজেক্টকে সমর্থন করে, যা সি করে না।</li>
                        </ul>
                        <div className='clipboard'>
                            <h5>উদাহরণঃ</h5>
                            <Code language='c' code={code}></Code>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="c" topic="introduction"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="c" topic="introduction"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default C_Introduction;