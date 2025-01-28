import {createContext, useMemo, useState} from "react";
import {RequestModal} from "../../models/RequestModal.ts";

interface DataContextProps {
    input: string;
    setInput: (value: string) => void;
    modalOpen: boolean;
    setModalOpen: (value: boolean) => void;
    requestModal?: RequestModal;
    setRequestModal: (value: RequestModal | undefined) => void;
    footnote: number;
    setFootnote: (value: number) => void;
}

export const DataContext = createContext({
    input: '',
    setInput: (_: string) => {},
    modalOpen: false,
    setModalOpen: (_: boolean) => {},
    requestModal: undefined,
    setRequestModal: (_: RequestModal) => {},
    footnote: 1,
    setFootnote: (_: number) => {},
} as DataContextProps);

interface DataProviderProps {
    children: React.ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {

    const [input, setInput] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    const [requestModal, setRequestModal] = useState<RequestModal>()
    const [footnote, setFootnote] = useState(1)

    const value = useMemo(() => (
        {
            input,
            setInput,
            modalOpen,
            setModalOpen,
            requestModal,
            setRequestModal,
            footnote,
            setFootnote
        }
    ), [input, setInput, modalOpen, setModalOpen, requestModal, setRequestModal, footnote, setFootnote])

    return (
        <DataContext.Provider value={value}>
          {children}
        </DataContext.Provider>
    )
}