import React from 'react';
import { format } from 'date-fns';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const CommentInput = ({ tutorial, topic }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [user] = useAuthState(auth);
    const date = format(new Date(), 'PP'); // uppercase PP
    const time = format(new Date(), 'pp'); // lowercase pp

    const onSubmit = (data) => {
        // console.log(data.comment, tutorial, topic, date, time);
        const data2 = {
            tutorial: tutorial,
            topic: topic,
            comment: data.comment,
            date: date,
            time: time, 
            email: user?.email,
            user: user?.displayName,
            photoURL: user?.photoURL
        }
        // console.log(data2);
        // console.log(user);

        // POST a comment from client-side to server-side
        const url = `https://bangla-ed-tech-resources-server.vercel.app/comment`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data2)
        })
            .then(res => res.json())
            .then(result => {
                toast('Your comment is successfully added');
                // console.log(result);
                reset();
            });
    }

    return (
        <div className='border px-4 py-3 mt-4 rounded'>
            <h2 className='fs-3' style={{ color: '#04AA6D' }}>Put your Comment</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                    className='py-2 px-2 mb-2 rounded border block'
                    style={{ width: '100%', height: '100px' }}
                    placeholder='Comment...'
                    type="text"
                    {...register("comment", {
                        required: "Valid comment is required",
                        maxLength: {
                            value: 5000,
                            message: "Comment have 5000 characters limit"
                        }
                    })}
                />
                <br />
                <p className='text-danger'>{errors?.comment?.message}</p>
                {
                    user ?
                        <input
                            className='py-2 px-3 rounded text-white fw-semibold border-0 bg-success'
                            type="submit"
                            value="Comment"
                        />
                        :
                        <input
                            className='py-2 px-3 rounded text-white fw-semibold border-0 bg-secondary'
                            type="submit"
                            value="Comment"
                            title="Login your account to comment."
                            // disabled={!user}
                            disabled
                        />
                }
            </form>
        </div>
    );
};

export default CommentInput;