import {Injectable} from "@nestjs/common";
import {Track, TrackDocument} from "./schemas/track.schema";
import {Comment, CommentDocument} from "./schemas/comment.schema";
import {Model, ObjectId, Types} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {CreateTrackDto} from "./dto/create-track.dto";
import {CreateCommentDto} from "./dto/create-comment.dto";


@Injectable()

export class TrackService {

    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentModel: Model<CommentDocument>
                ) {}

    async create(dto: CreateTrackDto) {
        const track = await this.trackModel.create({...dto, listens: 0})
        return track
    }

    async getAll() {
        const tracks = await this.trackModel.find()
        return tracks
    }

    async getOne(id: ObjectId) {
        const track = await this.trackModel.findById(id).populate('comments')
        return track

    }

    async delete(id: ObjectId) {
        const track = await this.trackModel.findByIdAndDelete(id)
        return track._id
    }

    async addComment(dto: CreateCommentDto) {
        const track = await this.trackModel.findById(dto.trackId)
        const comment = await this.commentModel.create({...dto})
        // @ts-ignore
        track.comments.push(comment._id)
        await track.save()
        return comment
    }

}