import React, { useState, useMemo } from "react";
import "antd/dist/antd.css";
import { Button, Input, List } from "antd";

import AddSession from "../../SessionModal/index";

const Index = ({ item, addSession, editSession, deleteSession }) => {
  const [visible, setVisible] = useState(false);
  const [editableSession, setEditableSession] = useState("-11");

  const sessionList = useMemo(() => item.sessions, [item.sessions]);
  return (
    <>
      <AddSession
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        addSession={addSession}
      />
      <List
        size="small"
        header={<Button onClick={() => setVisible(true)}>Add Session</Button>}
        dataSource={sessionList}
        renderItem={(session) => (
          <List.Item
            actions={
              editableSession === session.id
                ? null
                : [
                    <Button
                      type="text"
                      block
                      onClick={() => setEditableSession(session.id)}
                    >
                      Edit
                    </Button>,
                    <Button
                      type="text"
                      danger
                      onClick={() =>
                        deleteSession({
                          id: session.id,
                          categoryId: item.id,
                        })
                      }
                    >
                      Delete
                    </Button>,
                  ]
            }
            key={`${session.id}__02GR011`}
          >
            {editableSession === session.id ? (
              <Input
                autoFocus
                defaultValue={session.title}
                onPressEnter={(e) => {
                  e.stopPropagation();
                  editSession({
                    title: e.target.value,
                    id: session.id,
                    categoryId: item.id,
                  });
                  setEditableSession("-2");
                }}
              />
            ) : (
              session.title
            )}
          </List.Item>
        )}
      />
    </>
  );
};

export default Index;
