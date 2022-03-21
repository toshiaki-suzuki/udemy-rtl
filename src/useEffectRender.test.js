import React from "react";
import { render, screen } from "@testing-library/react";
import UseEffectRender from "./UseEffectRender";

describe("useEffect rendering", () => {
  it("Should render only after async function resolved", async () => {
    render(<UseEffectRender />);
    expect(screen.queryByText(/I am/)).toBeNull(); // 非同期関数実行前の状態をテスト
    expect(await screen.findByText(/I am/)).toBeInTheDocument(); // 非同期関数が値を取得してきてからの状態をテスト
  });
});