import useUserStore from "../store/useUserStore";

const UpdateUserInfoButton = () => {
  const updateUserState = useUserStore((state: any) => state.updateUserState);

  return (
    <button
      onClick={() => updateUserState({ username: "123", password: "123" })}
    >
      修改user信息
    </button>
  );
};

const UserInfo = () => {
  const username = useUserStore((state: any) => state.username);
  const password = useUserStore((state: any) => state.password);
  return (
    <>
      <div>{`username:${username},password:${password}`}</div>
      <UpdateUserInfoButton></UpdateUserInfoButton>
    </>
  );
};

export default UserInfo;
