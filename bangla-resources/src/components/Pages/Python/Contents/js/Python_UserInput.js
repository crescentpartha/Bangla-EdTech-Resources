import React from 'react';
import CommentDisplay from '../../../Common/Shared/CommentDisplay';
import CommentInput from '../../../Common/Shared/CommentInput';
import Code from '../../../Common/CodeThemes/Dracula_SyntaxHighlighter';

const code1 = `username = input("Enter username:")
print("Username is: " + username)`;

const code2 = `username = raw_input("Enter username:")
print("Username is: " + username)`;

const Python_UserInput = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>পাইথন ইউজার ইনপুট</h1> <br />
                <div>
                    <div>
                        <h3>ইউজার ইনপুট</h3>
                        <p>পাইথন ব্যবহারকারীর ইনপুটের জন্য অনুমতি দেয়।</p>
                        <p>তার মানে আমরা ব্যবহারকারীকে ইনপুট প্রদানের জন্য বলতে পারি।</p>
                        <p>Python 2.7 এর থেকে Python 3.6-এ পদ্ধতিটি একটু ভিন্ন।</p>
                        <p>Python 3.6 input() মেথড ব্যবহার করে।</p>
                        <p>Python 2.7 raw_input() মেথড ব্যবহার করে।</p>
                        <p>নিম্নলিখিত উদাহরণটি ব্যবহারকারীর নাম জিজ্ঞাসা করে, এবং আপনি যখন ব্যবহারকারীর নাম প্রবেশ করেন, তখন এটি স্ক্রিনে মুদ্রিত হয়।</p>
                        <div className='clipboard'>
                            <h4>উদাহরণঃ</h4>
                            <p>Python 3.6</p>
                            <Code language='python' code={code1}></Code>
                        </div>
                        <div className='clipboard mt-3'>
                            <h4>উদাহরণঃ</h4>
                            <p>Python 2.7</p>
                            <Code language='python' code={code2}></Code>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentInput tutorial="python" topic="user-input"></CommentInput>
                </div>
                <div>
                    <CommentDisplay tutorial="python" topic="user-input"></CommentDisplay>
                </div>
            </div>
        </div>
    );
};

export default Python_UserInput;