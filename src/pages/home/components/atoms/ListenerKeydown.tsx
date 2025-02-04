import {useContext} from "react";
import {DataContext} from "../../DataProvider.tsx";
import {useButtons} from "../../utils/useButtons.ts";
import {useKeyDown} from "../../utils/useKeyDown.ts";

export const ListenerKeydown = () => {

    const { setInput, input, setModalOpen, setRequestModal } = useContext(DataContext)
    const {
        handleHeaderOne,
        handleHeaderTwo,
        handleHeaderThree,
        handleItalic,
        handleBold,
        handleStrikethrough,
        handleBlockquote,
        handleLine,
        handleUppercase,
        handleModals
    } = useButtons(input, setInput, setModalOpen, setRequestModal)

    useKeyDown(() => {
        handleHeaderOne();
    }, ['h']);

    useKeyDown(() => {
        handleHeaderTwo();
    }, ['j']);

    useKeyDown(() => {
        handleHeaderThree();
    }, ['k']);

    useKeyDown(() => {
        handleModals('table');
    }, ['e']);

    useKeyDown(() => {
        handleBold();
    }, ['b']);

    useKeyDown(() => {
        handleItalic();
    }, ['i']);

    useKeyDown(() => {
        handleStrikethrough();
    }, ['s']);

    useKeyDown(() => {
        handleModals('listNum');
    }, ['l']);

    useKeyDown(() => {
        handleBlockquote();
    }, ['q']);

    useKeyDown(() => {
        handleModals('listDash');
    }, ['d']);

    useKeyDown(() => {
        handleModals('code');
    }, ['o']);

    useKeyDown(() => {
        handleModals('link');
    }, ['y']);

    useKeyDown(() => {
        handleLine();
    }, ['r']);

    useKeyDown(() => {
        handleModals('image');
    }, ['m']);

    useKeyDown(() => {
        handleModals('check');
    }, ['p']);

    useKeyDown(() => {
        handleModals('tag');
    }, ['f']);

    useKeyDown(() => {
        handleUppercase();
    }, ['u']);

    useKeyDown(() => {
        handleModals('badget')
    }, ['g']);

    return <></>
}