import React, { useState, useMemo } from "react";
import "antd/dist/antd.css";
import { Button, Card, Collapse, Input } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

import Item from "./Item/index";
import AddCategory from "../CategoryModal/index";

import { sessionDataForm, categoryDataForm } from "./utils";

const { Panel } = Collapse;

const Index = ({ list, dispatch }) => {
  const [visible, setVisible] = useState(false);
  const [editableCategory, setEditableCategory] = useState("-11");
  const categoryList = useMemo(() => list, [list]);

  const addCategory = (data) => {
    dispatch({ action: "ADD_CATEGORY", payload: categoryDataForm(data) });
  };
  const editCategory = (payload) => {
    dispatch({ action: "EDIT_CATEGORY", payload });
  };

  const addSession = ({ data, id }) => {
    dispatch({
      action: "ADD_SESSIONS",
      payload: {
        data: sessionDataForm({ data: data.sessions, categoryId: id }),
        categoryId: id,
      },
    });
  };

  const editSession = (payload) => {
    dispatch({ action: "EDIT_SESSIONS", payload });
  };

  return (
    <Card
      title="Category List"
      extra={
        <Button type={"ghost"} onClick={() => setVisible(true)}>
          Add Category
        </Button>
      }
    >
      <AddCategory
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        addCategory={addCategory}
      />

      <Collapse expandIconPosition="left">
        {categoryList.map((item) => (
          <Panel
            header={
              editableCategory === item.id ? (
                <>
                  <Input
                    autoFocus
                    defaultValue={item.title}
                    onPressEnter={(e) => {
                      e.stopPropagation();
                      editCategory({ title: e.target.value, id: item.id });
                      setEditableCategory("-2");
                    }}
                  />
                </>
              ) : (
                item.title
              )
            }
            key={item.id}
            extra={
              editableCategory === item.id ? null : (
                <>
                  <Button shape="circle" type={"ghost"}>
                    <EditFilled onClick={() => setEditableCategory(item.id)} />
                  </Button>
                  <Button shape="circle" type={"ghost"}>
                    <DeleteFilled
                      style={{ color: "#ff1142" }}
                      onClick={() =>
                        dispatch({
                          action: "DELETE_CATEGORY",
                          payload: item.id,
                        })
                      }
                    />
                  </Button>
                </>
              )
            }
          >
            <Item
              item={item}
              addSession={(data) => {
                addSession({ data, id: item.id });
              }}
              editSession={(data) => {
                editSession(data);
              }}
              deleteSession={(data) => {
                dispatch({ action: "DELETE_SESSIONS", payload: data });
              }}
            />
          </Panel>
        ))}
      </Collapse>
    </Card>
  );
};

export default Index;
