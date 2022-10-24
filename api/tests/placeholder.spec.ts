import superagent from 'superagent';
import {
  ALL_USERS,
  ALL_TODOS,
  ALL_POSTS,
  USER_10,
  USER_11,
  TODO,
  POST,
  PHOTO,
} from '../utils/endpoints';
import { STATUS_CODE } from '../utils/statusCodes';
import {
  GET_USER,
  TODO_FOR_POST,
  USER_FOR_POST,
  TODO_FOR_PUT,
  PHOTO_FOR_PATCH,
} from '../utils/constantsForMethods';

describe('API testing of jsonplaceholder.typicode.com website', () => {
  let response: any;
  test('GET method, should get all posts', async () => {
    try {
      response = await superagent.get(ALL_POSTS);
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).toBe(STATUS_CODE.SUCCESS);
  });

  test('GET method, should get tenth user', async () => {
    const { id, name } = GET_USER;
    try {
      response = await superagent.get(USER_10);
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).toBe(STATUS_CODE.SUCCESS);
    expect(response.body.id).toBe(id);
    expect(response.body.name).toBe(name);
  });

  test('GET method with 404 status code, try to get eleventh user', async () => {
    try {
      response = await superagent.get(USER_11);
    } catch (err: any) {
      expect(err.status).toBe(STATUS_CODE.NOT_FOUND);
    }
  });

  test('POST method, should post new user', async () => {
    const { id, fullName } = USER_FOR_POST;
    try {
      response = await superagent.post(ALL_USERS).send(USER_FOR_POST);
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).toBe(STATUS_CODE.CREATED);
    expect(response.body.id).toBe(id);
    expect(response.body.fullName).toBe(fullName);
  });

  test('POST method, should post new todo', async () => {
    const { id, completed } = TODO_FOR_POST;
    try {
      response = await superagent.post(ALL_TODOS).send(TODO_FOR_POST);
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).toBe(STATUS_CODE.CREATED);
    expect(response.body.id).toBe(id);
    expect(response.body.completed).toBe(completed);
  });

  test('GET method instead of POST method with 405 status code, should post new todo', async () => {
    try {
      response = await superagent.get(ALL_TODOS).send(TODO_FOR_POST);
    } catch (err: any) {
      expect(response.status).toBe(STATUS_CODE.METHOD_NOT_ALLOWED);
    }
  });

  test('DELETE method, should delete first post', async () => {
    try {
      response = await superagent.delete(POST);
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).toBe(STATUS_CODE.SUCCESS);
    expect(response.body).toEqual(expect.anything());
  });

  test('PUT method, should update first todo', async () => {
    const { todo } = TODO_FOR_PUT;
    try {
      response = await superagent.put(TODO).send(TODO_FOR_PUT);
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).toEqual(STATUS_CODE.SUCCESS);
    expect(response.body.todo).toBe(todo);
    expect(response.body.userId).toBeUndefined();
  });

  test('PATCH method, should update first photo', async () => {
    const { patch, albumId } = PHOTO_FOR_PATCH;
    try {
      response = await superagent.patch(PHOTO).send({ patch });
    } catch (err: any) {
      throw new Error(err.message);
    }
    expect(response.status).toEqual(STATUS_CODE.SUCCESS);
    expect(response.body.patch).toBe(patch);
    expect(response.body.albumId).toBe(albumId);
  });
});
