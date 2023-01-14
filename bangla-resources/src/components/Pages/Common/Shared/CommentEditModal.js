import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const CommentEditModal = ({ show, setShow, singleComment }) => {
    const handleClose = () => setShow(false);

    // Update a comment in client-side and send to the server-side
    const handleComment = event => {
        event.preventDefault();
        const comment = event.target.value;
        // console.log(comment);

        const data = {
            comment: comment,
            id: singleComment._id
        }

        const url = `https://bangla-ed-tech-resources-server.vercel.app/comment/${singleComment._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // console.log('success', result);
            })
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-success'>Edit Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleComment}>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Modify your previous comment:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                defaultValue={singleComment.comment}
                                onBlur={handleComment}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CommentEditModal;