import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForumData, useUserData } from "../store/store";
export async function axiosGet2(url: any, payload?: any) {
    try {
        const response = await axios.get(url, {
            params: payload,
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "accept": "application/json"
            },
        });
        return response.data;
    } catch (e) {
        return e;
    }
}
export async function axiosPost2(url: any, payload?: any) {
    const response = await axios.post(url, payload, {
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
    });
    if (response.data) {
        return response.data;
    } else {
        return [];
    }
}
export function useGetForumData() {
    return useQuery({
        queryKey: ["forumTopics"],
        queryFn: () => axiosGet2("/api/topics/getAllTopics"),
    });
}
const addPost = (payload: any) => {
    return axiosPost2("/api/topics/addTopic", payload);
}
export function useAddPost() {
    return useMutation({
        mutationFn: addPost,
    });
}
const getSub = (payload: any) => {
    return axiosPost2("/api/topics/getTopicById", payload);


}
export function useGetSub() {
    return useMutation({
        mutationFn: getSub,
        onSuccess(data, variables, context) {
            useForumData.setState({ data: data })
        },
    });
}

const loginPost = (payload: any) => {
    return axiosPost2("/api/login", payload);
}
export function useLogin() {
    return useMutation({
        mutationFn: loginPost,
    });
}
export function useGetUserInfo() {
    return useQuery({
        queryKey: ["userInfo"],
        queryFn: () => axiosGet2("/api/users/getuserinfo"),
        select(data) {
            useUserData.setState({ data: data })
        }
    });
}

const getTopicByID = (payload: any) => {
    return axiosPost2("/api/post/getpostbyid", payload);
}
export function useGetTopicByID() {
    return useMutation({
        mutationFn: getTopicByID,
    });
}
const addPostTopic = (payload: any) => {
    return axiosPost2("/api/post/addpost", payload);
}
export function useAddPostTopic() {
    return useMutation({
        mutationFn: addPostTopic,
    });
}

const addReply = (payload: any) => {
    return axiosPost2("/api/post/addReply", payload);
}
export function useAddReply() {
    return useMutation({
        mutationFn: addReply,
    });
}
const getReplies = (payload: any) => {
    console.log(payload)
    return axiosPost2("/api/post/getReplies", payload);
}
export function useGEtReplies() {
    return useMutation({
        mutationFn: getReplies,
    });
}

export function useGetFacultyList() {
    return useQuery({
        queryKey: ["FacultyList"],
        queryFn: () => axiosGet2('/api/getFacultyList')
    })
}

const addFaculty = (payload: any) => {
    return axiosPost2('/api/addFacultyMember', payload)
}
export function useAddFaculty() {
    return useMutation({
        mutationFn: addFaculty
    })
}

const updateFaculty = (payload: any) => {
    return axiosPost2('/api/updateFaculty', payload)
}
export function useUpdateFaculty() {
    return useMutation({
        mutationFn: updateFaculty
    })
}

const archiveFaculty = (payload: any) => {
    return axiosPost2('/api/archiveFaculty', payload)
}

export function useArchiveFaculty() {
    return useMutation({
        mutationKey: ["facultyArchive"],
        mutationFn: archiveFaculty
    })
}

const getFacultyById = (payload: any) => {
    return axiosPost2('/api/getFacultyById', payload)
}

export function useGetFacultyByID(id: any) {
    return useMutation({
        mutationKey: ["faculty", id],
        mutationFn: getFacultyById
    })
}


export function useGetsectionList() {
    return useQuery({
        queryKey: ["SectionList"],
        queryFn: () => axiosGet2('/api/getSectionList')
    })
}

const addSection = (payload: any) => {
    return axiosPost2('/api/addSection', payload)
}

export function useAddSection() {
    return useMutation({
        mutationFn: addSection
    })
}

const getSectionDetails = (payload: any) => {
    return axiosPost2('/api/getSectionById', payload)
}

export function useGetSectionDetails() {
    return useMutation({
        mutationFn: getSectionDetails
    })
}