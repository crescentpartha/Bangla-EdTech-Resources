import React from 'react';
import '../../../Common/css/styles.css';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import c from 'react-syntax-highlighter/dist/esm/languages/prism/c';
SyntaxHighlighter.registerLanguage('c', c);

const C_GetStarted = () => {
    return (
        <div className='border-bottom' style={{ height: '100vh', overflow: 'auto' }}>
            <div className='text-start p-4'>
                <h1>সি শুরু</h1> <br />
                <div>
                    <div>
                        <h3>সি দিয়ে শুরু করুন</h3>
                        <p>সি এর ব্যবহার শুরু করতে, আপনার দুটি জিনিস দরকারঃ</p>
                        <ul>
                            <li>সি কোড লিখতে একটি টেক্সট এডিটর প্রয়োজন, যেমন নোটপ্যাড।</li>
                            <li>একটি কম্পাইলার প্রয়োজন, যেমন জিসিসি; সি কোডকে এমন একটি ভাষায় অনুবাদ করতে হবে যা কম্পিউটার বুঝতে পারবে।</li>
                        </ul>
                        <p>বেছে নেওয়ার জন্য অনেক টেক্সট এডিটর এবং কম্পাইলার আছে। এই টিউটোরিয়ালে, আমরা একটি <mark>আইডিই</mark> ব্যবহার করব (নীচে দেখুন)।</p>
                    </div>
                    <div>
                        <h3>সি ইন্সটল আইডিই</h3>
                        <p>একটি আইডিই (ইন্টিগ্রেটেড ডেভেলপমেন্ট এনভায়রনমেন্ট) কোডটি সম্পাদনা এবং কম্পাইল করতে ব্যবহৃত হয়।</p>
                        <p>জনপ্রিয় আইডিই-এর মধ্যে রয়েছে <mark>Code::Blocks</mark>, <mark>Eclipse</mark>, এবং <mark>Visual Studio</mark>। এগুলি সমস্তই বিনামূল্যে ব্যবহার করা যায়, এবং এগুলি সি-এর কোড সম্পাদনা এবং ডিবাগ উভয় ক্ষেত্রেই ব্যবহার করা যেতে পারে।</p>
                        <p><b>দ্রষ্টব্য:</b> ওয়েব-ভিত্তিক আইডিই এর পাশাপাশি কাজ করতে পারে, কিন্তু কার্যকারিতা সীমিত।</p>
                        <p>আমরা আমাদের টিউটোরিয়ালে <mark>Code::Blocks</mark> ব্যবহার করব, যা শুরু করার জন্য খুবই ভালো হবে বলে আমরা বিশ্বাস করি।</p>
                        <p>আপনি <a href="http://www.codeblocks.org/">http://www.codeblocks.org/</a> এ কোডব্লকের সর্বশেষ সংস্করণটি খুঁজে পেতে পারেন৷ <mark>mingw-setup.exe</mark> ফাইলটি ডাউনলোড করুন, যা একটি কম্পাইলার সহ টেক্সট এডিটর ইনস্টল করবে।</p>
                    </div>
                    <div>
                        <h3>সি কুইকস্টার্ট</h3>
                        <p>আমাদের প্রথম C ফাইল তৈরি করা যাক।</p>
                        <p>কোডব্লক খুলুন এবং ফাইল &gt; নিউ &gt; এম্পটি ফাইলে যান।</p>
                        <p>নিচের সি কোডটি লিখুন এবং ফাইলটিকে <mark>myfirstprogram.c</mark> হিসেবে সংরক্ষণ করুন (<b>ফাইল &gt; সেভ ফাইল</b> হিসেবে):</p>
                        <div className='clipboard'>
                            <p>myfirstprogram.c</p>
                            <SyntaxHighlighter language="c" style={dracula}>
                                {`#include <stdio.h>
int main() {
    printf("Hello World!");
    return 0;
}
`}
                            </SyntaxHighlighter>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default C_GetStarted;