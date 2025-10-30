import { KeyNoteSpeakerCreateRequest } from "@/interfaces/KeynotespeakersInterface";
import { ApiResponse, deleteApi, getApi, postApi, putApi } from "@/utils/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import useSwr from "swr";
import useSWRMutation from "swr/mutation";

const onError = (err: AxiosError<ApiResponse<null>>) => {
  err.response && toast.error(err.response.data.message);
};

const onSuccess = (res: ApiResponse<object>) => {
  toast.success(res.message);
};

export const useGetAllKeyNoteSpeakers = (
  params: KeyNoteSpeakerCreateRequest
) => {
  return useSwr(
    [`user/keynote-speakers`, params],
    async ([url]: [string, KeyNoteSpeakerCreateRequest]) => {
      try {
        return await getApi<
          KeyNoteSpeakerCreateRequest,
          KeyNoteSpeakerCreateRequest
        >(url, params);
      } catch (error) {
        return [];
      }
    },
    {
      onError: () => {
        return [];
      },
    }
  );
};

export const useAddKeyNoteSpeakers = () => {
  return useSWRMutation(
    `user/keynote-speakers`,
    (url: string, { arg }: { arg: { body: KeyNoteSpeakerCreateRequest } }) => {
      return postApi<object, KeyNoteSpeakerCreateRequest>(url, arg.body);
    },
    {
      onSuccess: onSuccess,
      onError: onError,
    }
  );
};

export const useGetKeyNoteSpeakersById = (id: string) => {
  return useSwr(
    [`user/keynotespeaker/${id}`],
    ([url]: [string]) => {
      return getApi<KeyNoteSpeakerCreateRequest, null>(url, null);
    },
    {
      onError: onError,
    }
  );
};

export const useDeleteKeyNoteSpeakersById = () => {
  return useSWRMutation(
    `user/keynote-speakers/`,
    (url: string, { arg }: { arg: string }) => {
      return deleteApi<unknown>(url + arg);
    },
    {
      onError,
    }
  );
};

export const useUpdateKeyNoteSpeakers = () => {
  return useSWRMutation(
    `user/keynote-speakers/`,
    (
      url: string,
      { arg }: { arg: { body: KeyNoteSpeakerCreateRequest; id: string } }
    ) => {
      return putApi<object, KeyNoteSpeakerCreateRequest>(
        url + arg.id,
        arg.body
      );
    },
    {
      onSuccess: onSuccess,
      onError: onError,
    }
  );
};

export const useGetAllUserKeyNoteSpeakers = (
  params: KeyNoteSpeakerCreateRequest
) => {
  return useSwr(
    [`user/keynote-speakers/`, params],
    ([url]: [string, KeyNoteSpeakerCreateRequest]) => {
      return getApi<KeyNoteSpeakerCreateRequest, KeyNoteSpeakerCreateRequest>(
        url,
        params
      );
    }
  );
};
