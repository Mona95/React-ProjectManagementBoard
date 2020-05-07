import React from "react";
import firebase from "./firebase";

export const withDataFetching = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      data: [],
      loading: true,
      error: "",
    };
    async componentDidMount() {
      try {
        let dbData = [],
          snapshot = await firebase.firestore().collection("boards").get();
        snapshot.docs.map((doc) => {
          dbData = [...dbData, doc.data()];
        });
        if (dbData) {
          this.setState({
            data: dbData,
            loading: false,
          });
        }
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message,
        });
      }
    }
    render() {
      const { data, loading, error } = this.state;
      return (
        <WrappedComponent
          data={data}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  };
};
